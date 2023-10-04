// Encryption.ts

import CryptoJS from 'crypto-js';
import Keychain from 'react-native-keychain';

import Biometrics from 'react-native-biometrics';
import {NoteType} from '@types';

const rnBiometrics = new Biometrics();

const initializeEncryptionKey = async () => {
  try {
    const encryptionKey = await Keychain.getGenericPassword({
      service: 'encryption_key',
    });
    if (!encryptionKey) {
      const {publicKey} = await rnBiometrics.createKeys();
      if (publicKey) {
        Keychain.setGenericPassword('encryption_key', publicKey, {
          service: 'encryption_key',
        });
      } else {
        console.error('Failed to generate a biometric key');
      }
    }
  } catch (error) {
    console.error('Failed to initialize encryption key:', error);
    throw error;
  }
};

const encryptAndSaveNotes = async (notes: NoteType[]) => {
  try {
    const encryptionKey = await Keychain.getGenericPassword({
      service: 'encryption_key',
    });
    if (!encryptionKey) {
      throw new Error('Encryption key not initialized');
    }

    const encryptedNotes = CryptoJS.AES.encrypt(
      JSON.stringify(notes),
      encryptionKey.password,
    ).toString();

    await Keychain.setGenericPassword('notes', encryptedNotes, {
      service: 'notes',
    });
  } catch (error) {
    console.error('Failed to encrypt and save notes:', error);
    throw error;
  }
};

const retrieveAndDecryptNotes = async (): Promise<NoteType[] | null> => {
  try {
    const encryptionKey = await Keychain.getGenericPassword({
      service: 'encryption_key',
    });
    if (!encryptionKey) {
      throw new Error('Encryption key not initialized');
    }

    const credentials = await Keychain.getGenericPassword({service: 'notes'});

    if (credentials) {
      const decryptedNotes = CryptoJS.AES.decrypt(
        credentials.password,
        encryptionKey.password,
      ).toString(CryptoJS.enc.Utf8);
      const notes: NoteType[] = JSON.parse(decryptedNotes);
      return notes;
    }
    return null;
  } catch (error) {
    console.error('Failed to retrieve and decrypt notes:', error);
    throw error;
  }
};

export {encryptAndSaveNotes, retrieveAndDecryptNotes, initializeEncryptionKey};
