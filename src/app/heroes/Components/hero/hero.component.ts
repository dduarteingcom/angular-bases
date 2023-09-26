import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']

})
export class HeroComponent {
  public name:string = 'Ironman';
  public age:number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  getHeroeDescription():string{
    return `${this.name} - ${this.age}`;
  }
  changeHero():void{
    this.name = 'Flash';
  }
  changeAge():void{
    this.age = 21;
  }
  resetForm():void{
    this.name = 'Ironman';
    this.age = 45;
  }
}
