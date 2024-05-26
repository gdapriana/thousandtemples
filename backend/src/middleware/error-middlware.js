import ErrorResponse from "../error/error-response.js";

export const errorMiddleware = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ErrorResponse) {
    res.status(err.status).json({
      errors: err.message
    }).end();
  }  else {
    res.status(500).json({
      errors: err.message
    }).end();
  }
}