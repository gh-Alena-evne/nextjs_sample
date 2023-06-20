import dynamic from 'next/dynamic';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { MouseParallaxContainer } from 'react-parallax-mouse';
import { useDispatch } from 'react-redux';
import { IntercomProvider } from 'react-use-intercom';
import { Box, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import '@REST/axiosConfig';
import { uiActions } from '@bus/ui/actions';
import { registeredModals } from '@components/modals';
import { theme } from '../../themes/primary';
import { styles } from './styles';

const DynamicAppBar = dynamic(() => import('@components/common/AppBar'));
const DynamicScrollToTop = dynamic(
  () => import('@components/common/ScrollToTop'),
);
const DynamicModals = dynamic(() => import('@core/Modal'));
const DynamicAuthorizationTitle = dynamic(
  () => import('@components/common/AuthorizationTitle'),
);

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <IntercomProvider
      onShow={() => {
        dispatch(uiActions.setSidebarOpen(false));
      }}
      appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID!}
      autoBoot>
      <ThemeProvider theme={theme}>
        <Box sx={styles.parallaxWrapper}>
          <MouseParallaxContainer>
            <Box sx={styles.wrapper}>
              <DynamicAppBar loggedIn={false} />
              <SnackbarProvider>
                <Box height={'100%'}>
                  <Grid container sx={styles.root}>
                    <Grid item sm={6}>
                      {children}
                    </Grid>
                    <Grid item sm={6} sx={styles.titleWrapper}>
                      <DynamicAuthorizationTitle />
                    </Grid>
                  </Grid>
                </Box>
                <DynamicModals registeredModals={registeredModals} />
              </SnackbarProvider>
            </Box>
          </MouseParallaxContainer>
        </Box>
        <DynamicScrollToTop />
        <CssBaseline />
      </ThemeProvider>
    </IntercomProvider>
  );
};

export default AuthLayout;
