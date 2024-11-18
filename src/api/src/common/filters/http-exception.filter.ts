import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('HttpException');

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception.getStatus();
    const errorResponse = exception.getResponse();

    let message =
      typeof errorResponse === 'string'
        ? errorResponse
        : (errorResponse as any).message || 'Unexpected error';

    if (Array.isArray(message)) {
      message = message
        .map((msg, index) => `  ${index + 1}. ${msg}`)
        .join('\n');
    }

    this.logger.error(
      `\n================ HTTP EXCEPTION =================\n` +
        `Status Code: ${status}\n` +
        `Method: ${request.method}\n` +
        `URL: ${request.url}\n` +
        `Message:\n${message}\n` +
        `=================================================`,
    );

    response.status(status).json({
      statusCode: status,
      message: typeof message === 'string' ? message.split('\n') : message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
