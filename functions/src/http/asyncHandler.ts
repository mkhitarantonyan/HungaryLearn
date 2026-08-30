import type { NextFunction, Request, RequestHandler, Response } from 'express';

/** Express 4 does not forward rejected route promises to error middleware. */
export function asyncHandler<T extends Request = Request>(
  handler: (req: T, res: Response, next: NextFunction) => Promise<void>
): RequestHandler {
  return (req, res, next) => { void handler(req as T, res, next).catch(next); };
}
