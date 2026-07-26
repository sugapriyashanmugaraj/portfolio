import constants from "../utils/constants";

const handleSuccessResponse = (response: any, onResponse: Function) => {
  const resJson = response?.json();
  onResponse(resJson);
  return resJson;
};
const handleErrorResponse = (response: any, onResponse: Function) => {
  const resJson = response?.json();
  onResponse(resJson);
  return resJson;
};
const handleFetchRequest = (
  method: string,
  endpoint: string,
  requestData: any,
  onResponse: Function
) => {
  const apiUrl = constants.API_BASE_URL + endpoint;
  const token = localStorage.getItem(constants.TOKEN);
  fetch(apiUrl, {
    method,
    headers: {
      Authorization: token ? "Bearer" + token : "",
    },
    body: requestData
      ? requestData instanceof FormData
        ? requestData
        : JSON.stringify(requestData)
      : null,
  })
    .then((response) => handleSuccessResponse(response, onResponse))
    .catch((response) => handleErrorResponse(response, onResponse));
};

export default handleFetchRequest;
