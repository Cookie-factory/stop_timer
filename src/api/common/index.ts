import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {SuccessResponse} from '~/types/api/common';
import {config} from '~/utils/config';
import {getSecurityData} from '~/utils/storage';

export const BASE_URL = config.BASE_URL;

const axiosInstance = axios.create();

/**
 *@description api 공통 호출 모듈
 *@param props - axios 라이브러리 props (url, method, headers, baseURL ...)
 */
export const apiCall = async <ResponseData = any>(
  props: AxiosRequestConfig,
) => {
  //   const accessToken = await getSecurityData(config.ACCESS_TOKEN_NAME);
  //   const refreshToken = await getSecurityData(config.REFRESH_TOKEN_NAME);

  if (__DEV__) {
    console.log('@ API CALL PREVIOUS @');
    // console.log(`0. accessToken : ${accessToken}`);
    // console.log(`1. refreshToken : ${refreshToken}`);
    console.log(`2. METHOD : ${props.method}`);
    // console.log(`3. PATH : ${BASE_URL}${props.url}`);
    console.log(`4. DATA: ${JSON.stringify(props.data)}`);
    console.log('');
  }

  return axiosInstance({
    ...props,
    headers: {
      Accept: 'application/json',
      ...props.headers,
      //   Authorization: 'Bearer ' + `${accessToken}`,
    },
    url: `${props.url}`,
    baseURL: BASE_URL,
  })
    .then(
      ({
        data,
        status,
      }: {
        data: SuccessResponse<ResponseData>;
        status: number;
      }) => {
        if (__DEV__) {
          console.log('@ API SUCCESS RESPONSE @');
          console.log(`1. METHOD : ${props.method}`);
          console.log(`2. PATH : ${BASE_URL}${props.url}`);
          console.log(`3. DATA : `);
          console.log(data.message.results);
          console.log(`4. STATUS: ${status}`);
          console.log('');
        }

        return {
          data: data.message.results,
          statusCode: status,
          success: 'SUCCESS' as const,
        };
      },
    )
    .catch((error: AxiosError) => {
      console.log('ERROR');
      console.log(error);
      console.log(error.response);

      if (error.response?.data) {
        const data = error.response?.data as any;
        // const data = error.response?.data as ErrorResponse;

        if (__DEV__) {
          console.log('@ API ERROR RESPONSE @');
          console.log(data);
        }

        throw {
          message: data?.message || '',
          statusCode: data?.statusCode || 500,
          success: 'FAIL' as const,
        };
      } else
        throw {
          data: undefined,
          statusCode: error.response?.status,
          success: false,
        };
    });
};

/**
 *@description api 요청 후, 일정시간 응답이 없을 경우, 요청 캔슬
 *@param time - api 요청 후, 응답이 안올때까지 기다리는 시간
 */
const apiTimeout = (time: number) => {
  let controller = new AbortController();
  setTimeout(() => controller.abort(), time * 1000);
  return controller.signal;
};
