/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { OK } from '../../constants/httpConstants'
import { MissingParamError } from '../erros/missingParamError'
import { badRequest } from '../helpers/httpHelper'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']

    for (const field of requiredFields) {
      if (!httpRequest.body?.[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return {
      statusCode: OK,
      body: {}
    }
  }
}
