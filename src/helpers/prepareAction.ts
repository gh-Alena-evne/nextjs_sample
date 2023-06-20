export const prepareAction = ({ token, ...payload }: any) => {
  return {
    payload,
    meta: { token },
  };
};
