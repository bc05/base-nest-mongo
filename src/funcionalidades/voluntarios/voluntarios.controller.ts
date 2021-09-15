import { Body, Controller, Post } from '@nestjs/common';
import { ApenasMensagemRespostaDto } from 'src/comuns/dtos/resposta.dto';
import { MensagemPadrao } from 'src/comuns/mensagens/mensagem-padrao';
import { CreateVoluntarioDto } from './dto/create-voluntario.dto';
import { VoluntariosService } from './voluntarios.service';

@Controller({
  path: 'voluntarios',
  version: '1',
})
export class VoluntariosController {
  constructor(private readonly voluntariosService: VoluntariosService) {}

  @Post()
  async create(
    @Body() createVoluntarioDto: CreateVoluntarioDto,
  ): Promise<ApenasMensagemRespostaDto> {
    await this.voluntariosService.create(createVoluntarioDto);
    return { mensagem: MensagemPadrao.CRIADO_SUCESSO };
  }

  // @Get()
  // findAll() {
  //   return this.voluntariosService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.voluntariosService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateVoluntarioDto: UpdateVoluntarioDto,
  // ) {
  //   return this.voluntariosService.update(+id, updateVoluntarioDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.voluntariosService.remove(+id);
  // }
}
