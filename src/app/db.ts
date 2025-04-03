import Dexie, { Table } from 'dexie';
import { Cliente } from './models/cliente.model';
import { Premio } from './models/premio.model';
import { DEFAULT_CLIENTI, DEFAULT_PREMI } from './utils/constants';

export class AppDB extends Dexie {
  clienteList!: Table<Cliente, number>;
  premioList!: Table<Premio, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      premioList: '++id',
      clienteList: '++id',
    });
    this.on('populate', () => this.populate());
  }

  async populate(): Promise<void> {
    await db.premioList.bulkAdd(DEFAULT_PREMI);
    await db.clienteList.bulkAdd(DEFAULT_CLIENTI);
  }
}

export const db = new AppDB();
