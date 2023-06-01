import { createSlice } from '@reduxjs/toolkit';
import { Elang, Etheme, ISettingReducer } from '../../Interfaces';


const initialState: ISettingReducer = {
  lang: Elang.fr,
  theme: Etheme.light
};

const SettingReducer = createSlice({
  name: 'setting',
  initialState: initialState,
  reducers: {
    setLang: (state: ISettingReducer, action) => {      
      state.lang = action.payload.lang
    },
    setTheme: (state: ISettingReducer, action) => {      
        state.theme = action.payload.theme
      },
  }
});

export const { setLang, setTheme } = SettingReducer.actions;

export default SettingReducer.reducer;
