import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoluntariosModule } from './funcionalidades/voluntarios/voluntarios.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/poc'),
    VoluntariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
