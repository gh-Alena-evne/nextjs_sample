// eslint-disable-next-line @typescript-eslint/no-unused-vars,prettier/prettier
import {createAction} from '@reduxjs/toolkit';
import uiSlice from './slice';

const actions = {
  ...uiSlice.actions,
  closeModal: createAction('ui/closeModal'),
  modal: createAction('ui/fillModal', (data) => {
    return {
      payload: data,
    };
  }),
};

export const uiActions: typeof actions = actions;
