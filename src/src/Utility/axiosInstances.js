import axios from 'axios';
// @ts-ignore
//import * as SecureStore from "expo-secure-store";

import { endPoints,sportEndPoint } from "../constant/Environment";
export const BASE_URL =  endPoints.apiBaseUrl;  
export const BASE_URL_BET =  sportEndPoint.apiBaseUrl;       
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
      // SessionId: localStorage.getItem('session')
    //'Access-Control-Allow-Origin': '*',
   // Authorization: 'Bearer ' + localStorage.getItem('caroktajwt')
  }
});

export const axiosInstanceBet = axios.create({
  baseURL: BASE_URL_BET,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});

// export const axiosFormInstance = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'multipart/form-data',
//    // 'Access-Control-Allow-Origin': '*',
//   //  Authorization: 'Bearer ' + localStorage.getItem('caroktajwt')
//   }
// });

