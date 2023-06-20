import { SnackbarProvider } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { IntercomProvider } from 'react-use-intercom';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import '@REST/axiosConfig';
import { uiActions } from '@bus/ui/actions';
import { LeftSideBar } from '@components/account/LeftSideBar';
import { SideMenuTabs } from '@components/account/SideMenuTabs';
import AppBanner from '@components/common/AppBanner';
import AppBar from '@components/common/AppBar';
import ScrollToTop from '@components/common/ScrollToTop';
import { registeredModals } from '@components/modals';
import Modals from '@core/Modal';
import { theme } from '../../themes/primary';
import { styles } from './styles';

type AccountLayoutProps = {
  children: React.ReactNode;
};

const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <IntercomProvider
      onShow={() => {
        dispatch(uiActions.setSidebarOpen(false));
      }}
      appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID!}
      autoBoot>
      <ThemeProvider theme={theme}>
        <Box>
          <AppBar loggedIn={false} />
          <SnackbarProvider>
            <Box height={'200px'} overflow={'hidden'}>
              <AppBanner withImage={false} />
            </Box>
            <Container sx={styles.container}>
              <Box maxWidth={'380px'} width={'100%'} sx={styles.wrapper}>
                <LeftSideBar />
              </Box>
              <Box sx={styles.mobileWrapper}>
                <SideMenuTabs />
              </Box>
              {children}
            </Container>
            <Modals registeredModals={registeredModals} />
          </SnackbarProvider>
        </Box>
        <ScrollToTop />
        <CssBaseline />
      </ThemeProvider>
    </IntercomProvider>
  );
};

export default AccountLayout;
