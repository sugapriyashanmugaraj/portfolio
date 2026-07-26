import EndPoints from "../Endpoints";
import handleFetchRequest from "../handleFetchRequest";

export const signUp = (requestData: any, onResponse: Function) => {
  return handleFetchRequest("POST", EndPoints.SIGN_UP, requestData, onResponse);
};

export const login = (requestData: any, onResponse: Function) => {
  return handleFetchRequest("POST", EndPoints.LOGIN, requestData, onResponse);
};
