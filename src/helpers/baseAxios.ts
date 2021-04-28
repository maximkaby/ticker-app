import axios, { AxiosInstance } from 'axios';

const baseAxios: AxiosInstance = axios.create({
  baseURL: 'https://api.polygon.io',
  timeout: 15000,
  params: {
    apiKey: '6wqYvPOFdy2GSrgvx14_Ow40aBrE78u3'
  }
});

export default baseAxios;
