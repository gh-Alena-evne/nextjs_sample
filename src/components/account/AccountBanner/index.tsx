import Image from 'next/image';
import React from 'react';
import { Box } from '@mui/material';
import bannerImage from '@public/accountBanner.png';
import { styles } from './styles';

type AccountBannerProps = {};

export const AccountBanner: React.FC<AccountBannerProps> = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.bannerImage}>
        <Image
          src={bannerImage}
          alt={'Dream Engine'}
          loading={'lazy'}
          quality={50}
        />
      </Box>
    </Box>
  );
};
