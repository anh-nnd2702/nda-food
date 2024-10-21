import axios from "axios";
import { API_BASE_URL } from "constants/apiConstant";
import { isUndefinedOrNull } from "utils/helper";
const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const makeGet = async (url: string, params: any) => {
  const requestParams = { ...params };
  for (const k in params) {
    if (params[k] === "" && isUndefinedOrNull(params[k])) {
      delete requestParams[k];
    }
  }
  const getApi = await apiInstance.get(url, {
    params: requestParams,
  });
  return getApi;
};
