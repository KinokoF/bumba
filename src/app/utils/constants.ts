import { Cliente } from '../models/cliente.model';
import { Premio } from '../models/premio.model';

export const DEFAULT_PREMI: Premio[] = [
  {
    nome: 'Maglietta',
    timbri: 15,
  },
  {
    nome: 'Cappellino',
    timbri: 15,
  },
  {
    nome: 'Buono 10€',
    timbri: 15,
  },
];

export const DEFAULT_CLIENTI: Cliente[] = [
  {
    nome: 'Francesco',
    cognome: 'Bigozzi',
    timbri: 0,
  },
];
