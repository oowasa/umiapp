import { ResponseError } from 'umi-request';

export const request = {
  // prefix: 'https://pvp.qq.com', //王者荣耀官网
  prefix: '/api',
  errorHandler: (error: ResponseError) => {
    console.log(error);
    console.log(333);
    console.log(34444);
  }
}