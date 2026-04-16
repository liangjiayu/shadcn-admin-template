import axios, { type AxiosRequestConfig } from "axios"
import { toast } from "sonner"

const instance = axios.create({
  withCredentials: true,
})

/** 兼容文件上传 */
instance.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"]
  }
  return config
})

/** 响应拦截器 */
instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const serverMsg = error?.response?.data?.message

    /** 状态码为401，跳转到登录页面 */
    if (error.status === 401) {
      const redirect = encodeURIComponent(
        window.location.pathname + window.location.search
      )
      window.location.href = `/user/login?redirect=${redirect}`
      return
    }

    toast.error(serverMsg || error.message || "请求失败!")
    return Promise.reject(error)
  }
)

async function request<T>(url: string, options?: AxiosRequestConfig) {
  return instance.request<T, T>({
    url,
    ...options,
  })
}

export default request
