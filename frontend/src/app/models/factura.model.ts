import { User } from './user.model';
import { Product } from './product.model';

export class Factura {
  _id: string;
  numeroFactura: number;
  clienteId: User['_id'];
  nombreCliente: User['name'];
  items: Product[] = [];
  description: String;

  constructor(
    _id = '',
    numeroFactura = -1,
    clienteId = '',
    nombreCliente = '',
    items = [],
    description = ''
  ) {
    this._id = _id;
    this.numeroFactura = numeroFactura;
    this.clienteId = clienteId;
    this.nombreCliente = nombreCliente;
    this.items = items;
    this.description = description;
  }
}
