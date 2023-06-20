// eslint-disable-next-line @typescript-eslint/no-unused-vars,prettier/prettier
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line prettier/prettier
import {
  ModalDataActionPayload,
  UiState,
} from './typedefs';

const initialState: UiState = {
  isFetching: false,
  isModalOpen: false,
  isSidebarOpen: false,
  isSidebarCart: false,
  modalData: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    startFetching(state) {
      state.isFetching = true;
    },
    stopFetching(state) {
      state.isFetching = false;
    },
    showModal(state) {
      state.isModalOpen = true;
    },
    setSidebarOpen(state, action: PayloadAction<boolean>) {
      state.isSidebarOpen = action.payload;
    },
    setSidebarCartOpen(state, action: PayloadAction<boolean>) {
      state.isSidebarCart = action.payload;
    },
    hideModal(state) {
      state.isModalOpen = false;
    },
    fillModalData(state, action: PayloadAction<ModalDataActionPayload>) {
      state.modalData = action.payload;
    },
    clearModal(state) {
      state.modalData = null;
    },
    // inject
  },
});

export default uiSlice;
