import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import { MessageComponent } from './components/message/message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, RouterOutlet, RouterLink, RouterLinkActive, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faMoneyBill1Wave = faMoneyBill1Wave;
  title = 'sofka-prueba';
}
