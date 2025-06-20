import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 4000); // Use || instead of ??
  console.log(`Application is running on: ${await app.getUrl()}`); // Log the URL
}
bootstrap();
