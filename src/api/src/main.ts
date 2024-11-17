import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger, BadRequestException } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('ValidationErrors');

  const config = new DocumentBuilder()
    .setTitle('app_reciclagem')
    .setDescription('Reciclagem API description')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.enableCors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: errors => {
        const formattedErrors = errors.map(error => {
          const constraints = Object.values(error.constraints || {}).join(', ');
          return `${error.property}: ${constraints}`;
        });

        logger.error(`Validation error(s): ${formattedErrors.join('; ')}`);

        return new BadRequestException({
          statusCode: 400,
          message: formattedErrors,
          error: 'Requisição inválida',
        });
      },
    }),
  );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
