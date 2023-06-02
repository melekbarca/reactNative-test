import { createSlice } from '@reduxjs/toolkit';

type IModalReducer = {
    name: string,
    data: any
}
const initialState: IModalReducer = {
    name: "",
    data: null

};

const ModalReducer = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        setOpenModal: (state: IModalReducer, action) => {
            state.name = action.payload.name
            state.data = action.payload.data
        },
        setCloseModal: (state: IModalReducer) => {
            state.name = ""
            state.data = null
        },
    }
});

export const { setOpenModal, setCloseModal } = ModalReducer.actions;

export default ModalReducer.reducer;
