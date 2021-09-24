import { Injectable } from '@nestjs/common';
import { Conta } from './conta';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ContaService {
  contas: Conta[] = [
    {
      id: uuid(),
      titular: 'Janice Caldeira',
      cpf: 84414844061,
      saldo: 500000,
    },
    {
      id: uuid(),
      titular: 'Fabio Oliveira',
      cpf: 51655913018,
      saldo: 10,
    },
    {
      id: uuid(),
      titular: 'Steve Jobson',
      cpf: 42749706041,
      saldo: 3000000000,
    },
  ];

  findAll() {
    return this.contas;
  }

  findOne(id: string) {
    const conta = this.contas.find((value) => value.id == id);
    return conta;
  }

  create(conta: Conta) {
    conta.id = uuid();
    this.contas.push(conta);
    return conta;
  }

  update(conta: Conta) {
    const contaArray = this.findOne(conta.id);
    if (contaArray) {
      contaArray.titular = conta.titular;
    }

    return contaArray;
  }

  delete(id: string) {
    const index = this.contas.findIndex((value) => value.id == id);
    this.contas.splice(index, 1);
  }
}
