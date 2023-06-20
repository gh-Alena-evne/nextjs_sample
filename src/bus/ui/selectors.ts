import { createSelector } from 'reselect';
import { RootState } from '@setup/typedefs';

const uiSelector = (state: RootState) => state.ui;

export const getIsModalOpen = createSelector([uiSelector], (result) => {
  return result.isModalOpen;
});
export const getIsSidebarOpen = createSelector([uiSelector], (result) => {
  return result.isSidebarOpen;
});
export const getIsSidebarCartOpen = createSelector([uiSelector], (result) => {
  return result.isSidebarCart;
});

export const getModalData = createSelector([uiSelector], ({ modalData }) => {
  return modalData;
});
