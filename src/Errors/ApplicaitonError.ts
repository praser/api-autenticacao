class ApplicationError implements Error {
  name: string = ApplicationError.constructor.name

  message = 'Generic application error'
}

export default ApplicationError;
