import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: 'hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    button {
        padding: 5px;
        margin: 5px 10px;
        width: 75px;
    }
  `,
})

export class HeroPageComponent {

  name = signal('IronMan');
  age = signal(45);

  getHeroDescription(): string {
    return `Nombre: ${this.name()} - Edad: ${this.age()}`
  }

  changeHero(): void {
    this.name.update(v => v = 'spiderman')
    this.age.update(v => v = 22)
  }

  resetForm():void {
    this.name.update(v => v = 'IronMan')
    this.age.update(v => v = 45)
  }

  changeAge():void {
    this.age.update(v => v = 60);
  }

}