export const validateMathExpression = (input: string) => {
  const regex = /(([\+\-\/\*\^]?)([(]*(([(]?(([+-]?\d+[.,]?(\d+)?)([e][+-]\d+)?)[)]?)|([(]?value[)]?))[)]*)?(([(]*([(]?(([+-]?\d+[.,]?(\d+)?)([e][+-]\d+)?)[)]?)|([(]?value[)]?))[)]*)?([\+\-\/\*\^])([(]*(([(]?(([+-]?\d+[.,]?(\d+)?)([e][+-]\d+)?)[)]?)|([(]?value[)]?))[)]*))+/gi;

  return regex.test(input.replaceAll(' ', ''));
}
