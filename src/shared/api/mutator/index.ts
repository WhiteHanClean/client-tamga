import { API_URL } from '@/shared/config/env'
import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import Cookies from 'js-cookie'

export const $api = Axios.create({
  baseURL: API_URL || process.env.NEXT_PUBLIC_API_URL,
})

$api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get('accessToken')
    const variantLogin = Cookies.get('variantLogin')

    if (token) {
      config.headers['Authorization'] = `${variantLogin === 'jwt' ? 'JWT' : 'Bearer'} ${token}`
    }
    return config
  },
  async (error: AxiosError) => {
    await Promise.reject(error)
  },
)

$api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    const refresh = Cookies.get('refreshToken') ?? ''

    if (error.response.status === 401 && originalRequest._retry !== true) {
      originalRequest._retry = true
      return await refreshToken(refresh, `${API_URL}/api/v1/admin/token/refresh/`, $api, originalRequest)
    }

    return Promise.reject(error)
  },
)

export const customInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source()
  const promise = $api({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }: never) => data)

  promise['cancel'] = () => {
    source.cancel('Query was cancelled')
  }

  return promise
}

export type ErrorType<Error> = AxiosError<Error>
export type BodyType<BodyData> = BodyData

export async function refreshToken(
  refreshToken: string,
  refreshUrl: string,
  axiosInstance: AxiosInstance,
  originalRequest: AxiosRequestConfig,
) {
  try {
    const response = await axios.post(refreshUrl, {
      refresh: refreshToken,
    })

    const newAccessToken = response.data.access

    Cookies.set('accessToken', newAccessToken)

    return axiosInstance(originalRequest)
  } catch (error) {
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')

    return Promise.reject(error)
  }
}
