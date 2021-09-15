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

  async findAll() {
    return this.voluntarioModel.find({});
  }

  async create(
    createVoluntarioDto: CreateVoluntarioDto,
  ): Promise<VoluntarioDocument> {
    return this.voluntarioModel.create(createVoluntarioDto);
  }
}
