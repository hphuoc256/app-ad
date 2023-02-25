import { ErrorCode } from 'App/Helpers/ErrorCode'

export class Helper {
  static ApiResponseError(msg: string = 'FAILED', errors: any = []) {
    const message: any = {
      status: false,
      code: ErrorCode[msg] || null,
      msg,
      errors,
    }
    return message
    /*throw new ResponseException(message, 422)*/
  }

  static ApiResponseSuccess(data: any = [], msg: string = 'SUCCESS') {
    return {
      status: true,
      code: 0,
      msg,
      data,
    }
  }
}
