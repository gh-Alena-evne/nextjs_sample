import { apply } from 'redux-saga/effects';
import * as Sentry from '@sentry/react';

export function* handleError(error: any) {
  if (process.env.NODE_ENV !== 'development') {
    yield apply(Sentry, Sentry.captureException, [error]);
  }
}
