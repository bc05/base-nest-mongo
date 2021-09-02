import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateVoluntarioDto } from './dto/create-voluntario.dto';
import { Voluntario, VoluntarioDocument } from './schemas/voluntario.schema';

@Injectable()
export class VoluntariosService {
  constructor(
    @InjectModel(Voluntario.name)
    private voluntarioModel: Model<VoluntarioDocument>,
  ) {}

  async create(
    createVoluntarioDto: CreateVoluntarioDto,
  ): Promise<VoluntarioDocument> {
    const voluntario = await this.voluntarioModel.create(createVoluntarioDto);

    return voluntario;
  }
}
