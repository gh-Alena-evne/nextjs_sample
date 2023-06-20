import { InitialEntry } from 'history';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { IntercomProvider } from 'react-use-intercom';
import { registeredModals } from '@components/modals';
import { useStore } from '@setup/configureStore';
import { RootState, Subset } from '@setup/typedefs';
import Modals from '../Modal';

type MockProviderProps = {
  preloadedState: Subset<RootState>;
  routeEntries?: InitialEntry[];
  children: any;
};
const MockProvider: React.FC<MockProviderProps> = ({
  preloadedState,
  routeEntries = [''],
  children,
}: MockProviderProps) => {
  const { store } = useStore(preloadedState);

  return (
    <div>
      <IntercomProvider appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID!}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}>
          <Provider store={store}>
            <MemoryRouter initialEntries={routeEntries}>
              {children}
              <Modals registeredModals={registeredModals} />
            </MemoryRouter>
          </Provider>
        </SnackbarProvider>
      </IntercomProvider>
    </div>
  );
};

export default MockProvider;
