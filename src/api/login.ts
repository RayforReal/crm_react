import { httpFetch } from '@/servers';

export const getProductsApi = <T>(): Promise<{ appId: number, productType: string, resource: T }> => {
    return httpFetch('/prs/core/common/products')
}

// 获取验证码
export const getCodeApi = <T>(params: { code: string }): Promise<T> => {
    return httpFetch('/prs/auth/login/getCode', {
        params,
        responseType: 'blob'
    })
}