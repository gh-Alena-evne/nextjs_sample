import React from 'react';
import { useDispatch } from 'react-redux';
import { List } from '@mui/material';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { styles } from './styles';

type PaginationListProps = {
  children: React.ReactNode;
  maxHeight: string;
  maxCount: boolean;
  isFetching: boolean;
  nextUrl: string | null;
  sagaAction: ActionCreatorWithPayload<string>;
};

export const PaginationList: React.FC<PaginationListProps> = ({
  children,
  maxHeight,
  maxCount,
  isFetching,
  nextUrl,
  sagaAction,
}) => {
  const dispatch = useDispatch();
  const handleScroll = (e: any) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      !isFetching && nextUrl && dispatch(sagaAction(nextUrl));
    }
  };

  return (
    <List
      disablePadding
      onScroll={handleScroll}
      sx={[
        styles.root,
        {
          maxHeight: maxHeight,
          overflowY: maxCount ? 'scroll' : '',
        },
      ]}>
      {children}
    </List>
  );
};
