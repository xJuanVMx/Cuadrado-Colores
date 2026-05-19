import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuadrado',
  standalone: false,
  templateUrl: './cuadrado.component.html',
  styleUrl: './cuadrado.component.css'
})
export class CuadradoComponent {
  @Input() color: string = 'white';
  @Input() nombreColor: string = 'Blanco';
}