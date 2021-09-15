import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateVoluntarioDto } from './dto/create-voluntario.dto';
import { VoluntariosService } from './voluntarios.service';

@Controller({
  path: 'voluntarios',
  version: '1',
})
export class VoluntariosController {
  constructor(private readonly voluntariosService: VoluntariosService) {}

  @Post()
  create(@Body() createVoluntarioDto: CreateVoluntarioDto) {
    return this.voluntariosService.create(createVoluntarioDto);
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
