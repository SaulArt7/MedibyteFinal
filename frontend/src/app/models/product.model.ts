export class Product {
  _id: string;
  name: String;
  price: Number;
  description: String;
  stock: Number;
  image: String;

  constructor(
    _id = '',
    name = '',
    price = 0,
    description = '',
    stock = 0,
    image = ''
  ) {
    this._id = _id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.stock = stock;
    this.image = image;
  }
}
