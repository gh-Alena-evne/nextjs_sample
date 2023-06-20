import dynamic from 'next/dynamic';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { MouseParallaxContainer } from 'react-parallax-mouse';
import { useDispatch } from 'react-redux';
import { IntercomProvider } from 'react-use-intercom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '@REST/axiosConfig';
import { uiActions } from '@bus/ui/actions';
import { registeredModals } from '@components/modals';
import { theme } from '../../themes/primary';

const DynamicAppBar = dynamic(() => import('@components/common/AppBar'));
const DynamicModals = dynamic(() => import('@core/Modal'));
const DynamicScrollToTop = dynamic(
  () => import('@components/common/ScrollToTop'),
);

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <IntercomProvider
      onShow={() => {
        dispatch(uiActions.setSidebarOpen(false));
      }}
      appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID!}
      autoBoot>
      <ThemeProvider theme={theme}>
        <MouseParallaxContainer>
          <DynamicAppBar loggedIn={false} />
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}>
            {children}
            <DynamicModals registeredModals={registeredModals} />
          </SnackbarProvider>
        </MouseParallaxContainer>
        <DynamicScrollToTop />
        <CssBaseline />
      </ThemeProvider>
    </IntercomProvider>
  );
};

export default AppLayout;
