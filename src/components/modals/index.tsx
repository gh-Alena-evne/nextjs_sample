import { EditCollection } from '@components/modals/EditCollection';
import { FailedPayment } from '@components/modals/FailedPayment';
import { RemixPrompt } from '@components/modals/RemixPrompt';
import { SuccessfulPayment } from '@components/modals/SuccessfulPayment';
import { AddToCollection } from './AddToCollection';
import { ConfirmDeleteAccount } from './ConfirmDeleteAccount';
import { ConfirmOrCancel } from './ConfirmOrCancel';
import { CreateNewCollection } from './CreateNewCollection';
import { EmailAlreadyRegistered } from './EmailAlreadyRegistered';
import { ShippingAddress } from './ShippingAddress';
import { SuccessAddedToCollection } from './SuccessAddedToCollection';
import { SuccessChangePassword } from './SuccessChangePassword';
import { SuccessForgotPasswordEmail } from './SuccessForgotPasswordEmail';
import { SuccessOrFailed } from './SuccessOrFailed';
import { SuccessRegistration } from './SuccessRegistration';
import { SuccessSettingChanged } from './SuccessSettingChanged';
import { UnregisteredWarning } from './UnregisteredWarning';

export const registeredModals: { [name: string]: any } = {
  ConfirmOrCancel,
  SuccessfulPayment,
  FailedPayment,
  RemixPrompt,
  ShippingAddress,
  SuccessForgotPasswordEmail,
  SuccessChangePassword,
  EmailAlreadyRegistered,
  SuccessRegistration,
  SuccessSettingChanged,
  ConfirmDeleteAccount,
  SuccessOrFailed,
  UnregisteredWarning,
  AddToCollection,
  CreateNewCollection,
  EditCollection,
  SuccessAddedToCollection,
};
