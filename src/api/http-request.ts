import {AxiosRequestConfig} from 'axios';
import axiosClient from './axios-client';
import {IApiResponse} from './type';

export async function get<T>(url: string) {
  return axiosClient.get<IApiResponse<T>>(url);
}

export async function post<T>(url: string, data: any, options?: AxiosRequestConfig) {
  return axiosClient.post<IApiResponse<T>>(url, data, options);
}

export async function put<T>(id: unknown, data: any) {
  return axiosClient.put<IApiResponse<T>>(String(id), data);
}

export async function patch<T>(id: unknown, data: any) {
  return axiosClient.patch<IApiResponse<T>>(String(id), data);
}

export async function destroy<T>(id: unknown) {
  return axiosClient.delete<IApiResponse<T>>(String(id));
}
