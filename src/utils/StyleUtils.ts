import {Dimensions, PixelRatio} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('window');

export const LAYOUT_HEIGHT = 730;
export const LAYOUT_WIDTH = 410;

export const WINDOW_HEIGHT = initialWindowMetrics?.frame.height ?? height;
export const WINDOW_WIDTH = width;

const VERTIACL_RATIO = WINDOW_HEIGHT / LAYOUT_HEIGHT;
const HORIZONTAL_RATIO = WINDOW_WIDTH / LAYOUT_WIDTH;

export const verticalScale = (elementOriginalHeight: number) => {
  if (VERTIACL_RATIO === 1) {
    return elementOriginalHeight;
  }
  return PixelRatio.roundToNearestPixel(elementOriginalHeight * VERTIACL_RATIO);
};

export const horizontalScale = (elementOriginalWidth: number) => {
  if (HORIZONTAL_RATIO === 1) {
    return elementOriginalWidth;
  }
  return PixelRatio.roundToNearestPixel(
    elementOriginalWidth * HORIZONTAL_RATIO,
  );
};

export const fontScale = (
  fontSize: number,
  scalingType: 'vertical' | 'horizontal' | 'smallest' = 'smallest',
) => {
  const verticalScaledFontSize = Math.round(verticalScale(fontSize));
  const horizontalScaledFontSize = Math.round(horizontalScale(fontSize));
  switch (scalingType) {
    case 'vertical':
      return verticalScaledFontSize;
    case 'horizontal':
      return horizontalScaledFontSize;
    case 'smallest':
      return Math.min(horizontalScaledFontSize, verticalScaledFontSize);
  }
};
