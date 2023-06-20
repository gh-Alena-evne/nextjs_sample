import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MouseParallaxChild } from 'react-parallax-mouse';
import { Box, Typography } from '@mui/material';
// import Button from '@components/ui-kit/ButtonWithIcon';
import { styles } from './styles';

const DynamicVideo = dynamic(
  () => import('@components/common/AppBanner/BannerVideo'),
);
const DynamicButton = dynamic(
  () => import('@components/ui-kit/ButtonWithIcon'),
);

type NotFoundProps = {};

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.background} />
      <Box
        sx={styles.video}
        position={'absolute'}
        width={'100vw'}
        height={'calc(100vh - 80px)'}
        zIndex={-1}>
        <DynamicVideo />
      </Box>
      <Box sx={styles.wrapper}>
        <Box sx={styles.image}>
          <MouseParallaxChild factorX={0.015} factorY={0.015}>
            <Image src={'/astronaut.png'} alt={''} width={375} height={375} />
          </MouseParallaxChild>
        </Box>
        <MouseParallaxChild factorX={0.015} factorY={0.015} inverted>
          <Typography sx={styles.status}>404</Typography>
        </MouseParallaxChild>
        <Typography variant={'h6'} mt={'20px'} mb={'10px'}>
          It looks like something went wrong
        </Typography>
        <Typography
          variant={'body1'}
          color={'common.Dark/Text/Secondary'}
          mb={'44px'}>
          This page does not exist
        </Typography>
        <Link href={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
          <DynamicButton>Go Back home</DynamicButton>
        </Link>
      </Box>
      {process.env.NODE_ENV === 'development' ? (
        <>
          <br />
          Try creating a page in <code>src/pages/</code>.
          <br />
        </>
      ) : null}
    </Box>
  );
};

export default NotFound;
