import React from 'react';
import OtpInput, { OtpInputProps } from 'react-otp-input';
import { FormHelperText } from '@mui/material';
import { styles } from './styles';

type OtpInputFieldProps = {
  errorText: string;
} & OtpInputProps;

export const OtpInputField: React.FC<OtpInputFieldProps> = ({
  errorText,
  hasErrored,
  numInputs,
  ...props
}) => {
  return (
    <>
      <OtpInput
        numInputs={numInputs}
        inputStyle={styles.input}
        containerStyle={styles.container}
        hasErrored={hasErrored}
        errorStyle={styles.error}
        disabledStyle={styles.disabled}
        {...props}
      />
      {errorText && (
        <FormHelperText error sx={{ textAlign: 'left' }}>
          {errorText}
        </FormHelperText>
      )}
    </>
  );
};
