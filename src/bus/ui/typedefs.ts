// imports
//state type____________________________________
export type UiState = {
  isFetching: boolean;
  isModalOpen: boolean;
  isSidebarOpen: boolean;
  isSidebarCart: boolean;
  modalData: ModalDataActionPayload | null;
};

//payload types_________________________________
export type FillThingActionPayload = {};

export type FillSomeActionPayload = {};

export type FillThemeActionPayload = {};

export type ModalDataActionPayload = {
  modalName: string;
  modalComponent?: null;
  modalPayload?: any;
};

//common types__________________________________
