import { GetServerSidePropsContext, NextPageContext } from 'next';
import { Store } from 'redux';

export const initialDispatcher = async (
  context: GetServerSidePropsContext | NextPageContext,
  store: Store,
) => {
  return { store };
};
