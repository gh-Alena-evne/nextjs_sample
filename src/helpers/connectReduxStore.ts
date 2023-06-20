import { GetServerSidePropsContext, NextPageContext } from 'next';
import { parseCookies } from 'nookies';
import { ActionCreator } from 'redux';
import { verifyToken } from '@REST/api';
import { authActions } from '@bus/auth/actions';
import { initializeStore } from '@setup/configureStore';
import { initialDispatcher } from '@setup/initialDispatcher';
import { disableSaga } from './disableSaga';

export const connectReduxStore = async (
  context: GetServerSidePropsContext | NextPageContext,
  dispatchOnLoad?: { action: ActionCreator<any>; payload?: any }[],
) => {
  const { store } = await initialDispatcher(context, initializeStore());

  let isAuth = false;

  const cookies = parseCookies(context);

  if ('accessToken' in cookies && verifyToken(cookies['accessToken'])) {
    isAuth = true;
    await store.dispatch(authActions.isAuthenticatedTrue());
    await store.dispatch(
      authActions.fetchProfile({ token: cookies['accessToken'] }),
    );
  }

  await dispatchOnLoad?.forEach((item) => {
    store.dispatch(
      item.action({ ...item.payload, token: cookies['accessToken'] }),
    );
  });

  await disableSaga(store);

  const newState = store.getState();

  const stateUpdates = {
    auth: {
      isAuthenticated: newState.auth.isAuthenticated,
    },
  };

  return { store, stateUpdates, isAuth, token: cookies['accessToken'] };
};
