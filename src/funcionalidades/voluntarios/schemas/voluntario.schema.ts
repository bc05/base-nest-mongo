import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Voluntario {
  @Prop()
  nome: string;

  @Prop()
  cpf: string;
}