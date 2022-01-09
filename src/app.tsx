import { ResponseError } from 'umi-request';
import { message } from 'antd';

export const request = {
    prefix: '/api',
    errorHandler: (error: ResponseError) => {
       // 集中处理错误
    //    message.error(error);
       console.log(error);
    },
};