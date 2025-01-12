class ApiResponse {
  constructor(statusCode, message, data) {
    this.statusCode = statusCode; // 200, 201, 400, 404, 500
    this.message = message; // success, created, bad request, not found, internal server error
    this.data = data; // data
    thiss.success = statusCode < 400;
  }
}
