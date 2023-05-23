import { Component } from '@angular/core';
import { Product } from './product/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'installBootrap';
  myProduct : Product = {
    name: 'Hat',
    quatity: 200,
    price: 500
  }
}
