import { IKeys } from "../../Interfaces";


const commonColor: IKeys = {
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
    activeColor: '#DE5E69',
    deactiveColor: '#DE5E6950',
    boxActiveColor: '#DE5E6940',
    modalGray: 'rgba(0,0,0,0.5)',
    success1: "#16a34a",
    error1: "#dc2626",
  };
  
  const light: IKeys = {
    themeColor: '#FF5733',
    white: '#000000',
    sky: '#DE5E69',
    gray: 'gray',
    bgInput: "#FFFFFF",
    ...commonColor,
  };
  
  const dark: IKeys = {
    themeColor: '#75FF33',
    white: '#FFFFFF',
    sky: '#831a23',
    gray: 'white',
    bgInput: "#000000",
    ...commonColor,
  };
  
  export { light, dark, commonColor };
