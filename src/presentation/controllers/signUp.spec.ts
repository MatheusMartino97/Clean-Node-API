import { BAD_REQUEST } from '../../constants/httpConstants'
import { MissingParamError } from '../erros/missingParamError'
import { SignUpController } from './signUp'

describe('SignUp Controller', () => {
  const sut = new SignUpController()

  describe('When no name is provided', () => {
    it('Then it should return a bad request error', () => {
      const httpRequest = {
        body: {
          name: undefined
        }
      }

      const httpResponse = sut.handle(httpRequest)

      expect(httpResponse.statusCode).toBe(BAD_REQUEST)
    })

    it('Then it should return an error message', () => {
      const httpRequest = {
        body: {
          name: undefined
        }
      }

      const httpResponse = sut.handle(httpRequest)

      expect(httpResponse.body).toEqual(new MissingParamError('name'))
    })
  })

  describe('When no email is provided', () => {
    it('Then it should return a bad request error', () => {
      const httpRequest = {
        body: {
          name: 'any name',
          email: undefined
        }
      }

      const httpResponse = sut.handle(httpRequest)

      expect(httpResponse.statusCode).toBe(BAD_REQUEST)
    })

    it('Then it should return an error message', () => {
      const httpRequest = {
        body: {
          name: 'any name',
          email: undefined
        }
      }

      const httpResponse = sut.handle(httpRequest)

      expect(httpResponse.body).toEqual(new MissingParamError('email'))
    })
  })
})
