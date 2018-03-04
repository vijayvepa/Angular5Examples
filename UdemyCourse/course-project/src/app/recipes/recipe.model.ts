export class Recipe {
  public  name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    console.log('name: ' + name);
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    console.log('this.name:' + this.name);
  }
}
