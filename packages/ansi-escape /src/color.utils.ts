type ColorTextFn = (text: string) => string;

const isColorAllowed = () => !process?.env?.NO_COLOR ?? true;

export const colorIfAllowed = (colorFn: ColorTextFn) => (text: string) =>
  isColorAllowed() ? colorFn(text) : text;

