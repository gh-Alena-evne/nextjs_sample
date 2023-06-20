import dynamic from 'next/dynamic';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Dialog, Typography } from '@mui/material';
import { uiActions } from '@bus/ui/actions';
import { getIsModalOpen, getModalData } from '@bus/ui/selectors';
// import IconButton from '@components/ui-kit/IconButton';
// import CloseIcon from '@components/ui-kit/Icons/CloseIcon';
import { styles } from './styles';

const DynamicIconButton = dynamic(
  () => import('@components/ui-kit/IconButton'),
);
const DynamicCloseIcon = dynamic(
  () => import('@components/ui-kit/Icons/CloseIcon'),
);

type ModalsProps = {
  registeredModals: Record<string, React.FC>;
};

const Modals: React.FC<ModalsProps> = ({ registeredModals }) => {
  const modalData = useSelector(getModalData);
  const isOpen = useSelector(getIsModalOpen);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(uiActions.closeModal());
  };

  const closeModalOutside = () => {
    modalData!.modalPayload.isOutSideClicked &&
      dispatch(uiActions.closeModal());
  };

  return modalData ? (
    <Dialog
      onClose={closeModalOutside}
      open={isOpen}
      sx={styles.root}
      disableScrollLock>
      {modalData.modalPayload.isCloseButton || (
        <Box sx={styles.titleSection}>
          {modalData.modalPayload.title && (
            <Typography
              variant={'h5'}
              textAlign={modalData.modalPayload.titlePosition}>
              {modalData.modalPayload.title}
            </Typography>
          )}
          <DynamicIconButton color={'default'} onClick={closeModal}>
            <DynamicCloseIcon />
          </DynamicIconButton>
        </Box>
      )}

      {registeredModals[modalData.modalName]
        ? React.createElement(registeredModals[modalData.modalName], {
            ...modalData.modalPayload,
            closeModal,
          })
        : React.createElement(
            'div',
            {},
            <>{`${modalData.modalName} is not registered`}</>,
          )}
    </Dialog>
  ) : null;
};

export default Modals;
