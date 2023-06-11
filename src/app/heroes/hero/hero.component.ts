import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'thor';
  public age: number = 23;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name}-${this.age}`;
  }

  changeName(): void {
    this.name = 'Groot';
  }

  changeAge(): void {
    this.age = 30;
  }

  reset(): void {
    this.name = 'thor';
    this.age = 23;
  }
}
