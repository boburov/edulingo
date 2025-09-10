import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  await app.listen(process.env.PORT ?? 9011);
=======
  app.enableCors({})
  await app.listen(process.env.PORT ?? 3000);
>>>>>>> 77c12bc (auth finished)
}
bootstrap();
