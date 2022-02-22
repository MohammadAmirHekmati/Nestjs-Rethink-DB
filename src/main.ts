import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Rethink DB')
    .setDescription('The RethinkDB API description')
    .setVersion('1.0')
    .addTag('RethinkDB')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000).then(async ()=>{
    console.log(`Swagger Running on : http://localhost:3000/docs`);
  });
}
bootstrap();
