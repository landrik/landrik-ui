export const capitalise = (string: string): string => (
  string.charAt(0).toUpperCase() + string.slice(1)
);

export const convertObjectToString = (obj: unknown): string => (
  JSON.stringify(obj, null, 1)
    .replace(/"([^(")]+)":/g, '$1:')
    .replace(/"/g, "'")
);

export const joinClassNames = (...classes: Array<string | boolean | undefined>): string => classes.filter((element) => typeof element === 'string').join(' ');


export const hexToRgbA = (hex: string):string =>{
  var c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c= hex.substring(1).split('');
      if(c.length== 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
  }
  throw new Error('Bad Hex');
}


export const hexToRGBA = (hex: string, alpha: string):string => {

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  // if (alpha) {
  //   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  // }
  // return `rgb(${r}, ${g}, ${b})`;

  return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgb(${r}, ${g}, ${b})`;

}