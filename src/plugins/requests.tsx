import axios, { AxiosResponse } from 'axios';

interface Payload {
  url: string;
  params?: any;
  data?: any;
}

const getData = async (payload: Payload): Promise<any> => {
  try {
    const { data }: AxiosResponse<any> = await axios.get(payload.url, { params: payload.params });
    return data;
  } catch (error) {
    throw error;
  }
};

const postData = async (payload: Payload): Promise<any> => {
  try {
    const { data }: AxiosResponse<any> = await axios.post(payload.url, payload.data, { params: payload.params });
    return data;
  } catch (error) {
    throw error;
  }
};

const deleteData = async (payload: Payload): Promise<any> => {
  try {
    const { data }: AxiosResponse<any> = await axios.delete(payload.url, { params: payload.params });
    return data;
  } catch (error) {
    throw error;
  }
};

const putData = async (payload: Payload): Promise<any> => {
  try {
    const { data }: AxiosResponse<any> = await axios.put(payload.url, payload.data, { params: payload.params });
    return data;
  } catch (error) {
    throw error;
  }
};

const patchData = async (payload: Payload): Promise<any> => {
  try {
    const { data }: AxiosResponse<any> = await axios.patch(payload.url, payload.data, { params: payload.params });
    return data;
  } catch (error) {
    throw error;
  }
};

export { getData, postData, patchData, deleteData, putData };
