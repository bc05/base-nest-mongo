import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVoluntarioDto {
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;
}
