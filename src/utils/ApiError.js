class ApiError extends Error {
  constructor(
    statusCode,
    messege = "something went wrong",
    errors = [],
    stack = ""
  ) {
    super(messege);
    this.statusCode = statusCode;

    this.data = null;
    this.message = messege;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiErrror };
