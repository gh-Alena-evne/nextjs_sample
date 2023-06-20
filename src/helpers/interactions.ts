import { userEvent } from '@storybook/testing-library';

export const typeToInput = async (canvas: any, label: string, text: string) => {
  await userEvent.type(
    canvas.getByLabelText(label, {
      selector: 'input',
    }),
    text,
    {
      delay: 100,
    },
  );
};

export const typeToInputById = async (
  canvas: any,
  testId: string,
  text: string,
) => {
  await userEvent.type(canvas.getByTestId(testId), text, {
    delay: 100,
  });
};

export const selectOption = async (
  canvas: any,
  testId: string,
  optionTestId: string,
) => {
  const countryInput = canvas.getByRole(testId);
  await userEvent.click(countryInput.firstElementChild!);
  const city = canvas.getByTestId(optionTestId);
  await userEvent.click(city);
};

export const clickRadio = async (canvas: any, testId: string) => {
  const radioButton = canvas.getByTestId(testId);
  await userEvent.click(radioButton);
};

export const clickSubmit = async (canvas: any) => {
  const submitButton = canvas.getByRole('submit');

  await userEvent.click(submitButton, undefined, {
    skipPointerEventsCheck: true,
  });
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const interactions = {
  typeToInput,
  selectOption,
  clickRadio,
  clickSubmit,
  sleep,
};

export default interactions;
