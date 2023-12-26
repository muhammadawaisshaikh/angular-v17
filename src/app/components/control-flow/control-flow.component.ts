import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/shared/components/card/card.component';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {

  isCard: boolean = false;

  users: any = [
    { id: 1, name: 'Muhammad' },
    { id: 2, name: 'Awais' },
    { id: 3, name: 'Ilyas' },
  ]

  toggleCard() {
    this.isCard = !this.isCard;
  }

}
