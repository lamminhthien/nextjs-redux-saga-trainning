import {AxiosRequestConfig} from 'axios';
import axiosClient from './axios-client';

export async function get<T>(url: string) {
  return axiosClient.get<T>(url);
}

export async function post<T>(url: string, data: any, options?: AxiosRequestConfig) {
  return axiosClient.post<T>(url, data, options);
}

export async function put<T>(id: unknown, data: any) {
  return axiosClient.put<T>(String(id), data);
}

export async function patch<T>(id: unknown, data: any) {
  return axiosClient.patch<T>(String(id), data);
}

export async function destroy<T>(id: unknown) {
  return axiosClient.delete<T>(String(id));
}
