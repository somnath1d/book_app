import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book_app';

  image: string = "https://m.media-amazon.com/images/I/715u7p+38+L._SL1500_.jpg";
  book_name: string = "Manifest";
  author: string = "Roxie Nafousi";
  price: number = 310;
}
