
type ResponseType =
    | 'arraybuffer'
    | 'blob'
    | 'document'
    | 'json'
    | 'text'
    | 'stream';

export type THttpOption = {
    method?: 'delelte' | 'post' | 'get',
    data?: unknown
    params?: unknown
    responseType?:ResponseType
}
