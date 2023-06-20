import Router, { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '@bus/ui/actions';
import AttentionIcon from '@components/ui-kit/Icons/AttentionIcon';

export const useWarnIfUnsavedChanges = (unsavedChanges: boolean) => {
  const [isConfirm, setIsConfirm] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (unsavedChanges) {
      const routeChangeStart = (url: string) => {
        if (!isConfirm) {
          dispatch(
            uiActions.modal({
              modalName: 'ConfirmOrCancel',
              modalPayload: {
                onConfirm: () => {
                  setIsConfirm(true);
                  dispatch(uiActions.closeModal());
                  router.push(url);
                },
                subtitle: {
                  icon: AttentionIcon,
                  title: 'Confirm action',
                  subtitle:
                    'Are you sure you want to leave this page? You have unsaved information',
                },
                cancelButton: {
                  text: 'No',
                },
                confirmButton: {
                  text: 'Yes',
                },
                isCloseButton: true,
              },
            }),
          );
          Router.events.emit('routeChangeError');
          throw 'Abort route change. Please ignore this error.';
        }
      };
      Router.events.on('routeChangeStart', routeChangeStart);

      return () => {
        Router.events.off('routeChangeStart', routeChangeStart);
      };
    }
  }, [isConfirm, unsavedChanges]);

  const before = useCallback(
    ({ url }: { url: string }) => {
      if (unsavedChanges) {
        dispatch(
          uiActions.modal({
            modalName: 'ConfirmOrCancel',
            modalPayload: {
              onCancel: () => {
                setIsConfirm(true);
                router.replace(router.pathname).then(() => {
                  dispatch(uiActions.closeModal());
                  setIsConfirm(false);
                });
              },
              onConfirm: () => {
                setIsConfirm(true);
                dispatch(uiActions.closeModal());
                router.push(url);
              },
              subtitle: {
                icon: AttentionIcon,
                title: 'Confirm action',
                subtitle:
                  'Are you sure you want to leave this page? You have unsaved information',
              },
              cancelButton: {
                text: 'No',
              },
              confirmButton: {
                text: 'Yes',
              },
              isCloseButton: true,
            },
          }),
        );

        return false;
      }

      return true;
    },
    [unsavedChanges, router.pathname],
  );

  useEffect(() => {
    router.beforePopState(before);

    return () => {
      router.beforePopState(() => {
        return true;
      });
    };
  }, [unsavedChanges]);

  useEffect(() => {
    window.addEventListener('beforeunload', alertUser);

    return () => {
      window.removeEventListener('beforeunload', alertUser);
    };
  }, [unsavedChanges]);

  const alertUser = (e: any) => {
    if (unsavedChanges) {
      e.returnValue = '';
      e.preventDefault();
    }
  };
};
