import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 public name: string = 'ironMan';
 public age: number = 45;
 public showNameButton: boolean = true;
 public showAgeButton: boolean = true;

 public get capitalizedName(): string {
  return this.name.toUpperCase();
 }

 public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
 }

 public changeHero(): void {
  this.name = 'Spiderman';
  //this.showNameButton = false;
 }

 public changeAge(): void {
  this.age = 25;
  //this.showAgeButton = false;
 }
}
