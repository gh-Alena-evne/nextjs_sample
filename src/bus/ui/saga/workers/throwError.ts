import { call } from 'redux-saga/effects';

type ErrorType = {
  status_code: number;
  details: {
    code?: string;
    detail: string;
  };
};

export function* throwError(response: any) {
  const { error }: { error: ErrorType } = yield call([response, 'json']);
  if (error) {
    throw new Error(error.details.detail, { cause: error as unknown as Error });
  } else {
    throw new Error('ERRoR', { cause: error as unknown as Error });
  }
}
