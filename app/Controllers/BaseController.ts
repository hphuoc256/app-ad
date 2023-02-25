import { ErrorCode } from 'App/Helpers/ErrorCode'

export default class BaseController {

  public ApiResponseError(msg: string = 'FAILED', errors: any = []) {
    const message: any = {
      status: false,
      code: ErrorCode[msg] || null,
      msg,
      errors,
    }
    return message
  }

  public ApiResponseSuccess(data: any = [], msg: string = 'SUCCESS') {
    return {
      status: true,
      code: 0,
      msg,
      data,
    }
  }
}
