import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'

const client = axios.create({
 timeout: 1000 * 10,
})

export function apiCall<T>(config: AxiosRequestConfig<T>): AxiosPromise<T> {
 return client(config)
}
