import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: 'hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UpperCasePipe],
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

  heroDescription = computed(() =>{
    const description = `Nombre: ${this.name()} - Edad: ${this.age()}`
    return description;
  })
  
  capitalizedName = computed(()=> this.name().toUpperCase())

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