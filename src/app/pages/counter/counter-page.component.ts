import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
        padding: 5px;
        margin: 5px 10px;
        width: 75px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CounterPageComponent {

    counter = 10;
    counterSignal = signal(100);

    increaseByOne(value: number) {
        this.counter += value;
        this.counterSignal.update(current => current += value);
    }
    
    decreaseByOne(value: number) {
        this.counter -= value;
        this.counterSignal.update(current => current -= value)
    }
    reset() {
        this.counter = 10;
        this.counterSignal.update(current => current = 100);
    }
}