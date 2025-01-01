import axios from "axios";
import { BASE_URL } from "./api";

interface ApiProps {
  method: "get" | "post" | "delete" | "put" | "patch";
  url: string;
  bodyData?: object;
  headers?: object;
  params?: object;
}

export const axiosInstance = axios.create({ baseURL: BASE_URL });

export const apiConnector = async ({
  method,
  url,
  bodyData,
  headers,
  params,
}: ApiProps) => {
  try {
    const config = {
      method,
      url,
      data: bodyData || undefined,
      headers: headers || undefined,
      params: params || undefined,
    };

    const response = await axiosInstance.request(config);
    return response;
  } catch (error) {
    console.error("API call failed: ", error);
    throw error;
  }
};
