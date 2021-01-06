import ApplicationError from './ApplicaitonError';

class BadCredentialsError extends ApplicationError {
  name: string = BadCredentialsError.constructor.name;

  message = 'Bad credentials'
}

export default BadCredentialsError;
