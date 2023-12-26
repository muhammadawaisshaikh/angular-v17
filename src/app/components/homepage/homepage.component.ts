import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/shared/components/card/card.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  IsShowCard: boolean = false;

}
