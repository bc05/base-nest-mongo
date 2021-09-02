import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VoluntarioDocument = Voluntario & Document;
@Schema()
export class Voluntario {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  cpf: string;
}
export const VoluntarioSchema = SchemaFactory.createForClass(Voluntario);
