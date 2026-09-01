import { NestFactory } from '@nestjs/core';
import { CameraServiceModule } from './camera-service.module.js';

async function bootstrap() {
  const app = await NestFactory.create(CameraServiceModule);
  await app.listen(process.env.port ?? 3000);
}
await bootstrap();
