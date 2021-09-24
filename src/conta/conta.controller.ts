import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Conta } from './conta';
import { ContaService } from './conta.service';

@Controller('contas')
export class ContaController {
  constructor(private contaService: ContaService) {}

  @Get()
  async findAll(): Promise<Conta[]> {
    return this.contaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Conta> {
    return this.contaService.findOne(id);
  }

  @Post()
  async create(@Body() conta: Conta): Promise<Conta> {
    return this.contaService.create(conta);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() conta: Conta): Promise<Conta> {
    conta.id = id;
    return this.contaService.update(conta);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.contaService.delete(id);
  }
}
