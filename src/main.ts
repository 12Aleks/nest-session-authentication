import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";



const PORT = process.env.PORT || 5000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(PORT, () => console.log(`Port - ${PORT}`));

}
bootstrap();
