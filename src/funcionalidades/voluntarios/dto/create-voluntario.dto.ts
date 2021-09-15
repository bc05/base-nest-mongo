import { IsNotEmpty, IsString } from 'class-validator';
import { validacaoMensagem } from 'src/comuns/mensagens/mensagem-validacao';

export class CreateVoluntarioDto {
  @IsString()
  @IsNotEmpty({ message: validacaoMensagem('nome').NAO_VAZIO })
  nome: string;

  @IsNotEmpty({ message: validacaoMensagem('cpf').NAO_VAZIO })
  @IsString()
  cpf: string;
}
