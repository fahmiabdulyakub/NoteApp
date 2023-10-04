export interface InputNotePropsType {
  title: string;
  description: string;
  onChangeTitle: (title: string) => void;
  onChangeDescription: (description: string) => void;
  onSave: () => void;
}
