import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './components/search/search.component';
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, TableComponent, SearchComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faMoneyBill1Wave = faMoneyBill1Wave;
  title = 'sofka-prueba';
}
