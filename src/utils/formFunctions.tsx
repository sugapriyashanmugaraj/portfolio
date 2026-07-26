import constants from "./constants";

export const checkEmpty = (value: any) => {
  const data = String(value);
  return data.length === 0;
};
export const checkValidEmail = (value: any) => {
  const result = constants.emailRegEx.test(value);
  return result;
};
export const checkValidPass = (value: any) => {
  const result = constants.passwordRegEx.test(value);
  return result;
};
