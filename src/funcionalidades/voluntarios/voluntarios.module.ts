import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Voluntario, VoluntarioSchema } from './schemas/voluntario.schema';
import { VoluntariosController } from './voluntarios.controller';
import { VoluntariosService } from './voluntarios.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Voluntario.name, schema: VoluntarioSchema },
    ]),
  ],
  controllers: [VoluntariosController],
  providers: [VoluntariosService],
})
export class VoluntariosModule {}
