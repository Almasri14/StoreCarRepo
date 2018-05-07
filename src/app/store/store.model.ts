export class Store {
  public name: string;
  public price: number;
  public description: string;
  public amount = 1;
  public imagePath: string[] = [];
  public owner: string;
  constructor(name: string, price: number, description: string, imagePath: string[]) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.imagePath = imagePath;
  }
}

