import { BAD_REQUEST } from '../../constants/httpConstants'
import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: BAD_REQUEST,
  body: error
})
