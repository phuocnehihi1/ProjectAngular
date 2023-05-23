import { Component } from '@angular/core';
import { Product } from './product/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'installBootrap';
  products : Product [] = [
    { id:1,name:'hat', quatity:100,price:300, discount:10 },
    { id:2,name:'T-shirt', quatity:100,price:300, discount:20 },
    { id:3,name:'Jean', quatity:100,price:100, discount:10 }
  ]

  // Hàm Show Để Hiện Thị lên component
  show(innerHTML:string){

      let item = document.querySelector('#item');
      if(item){
        item.innerHTML = innerHTML;
      }
  }

// Khai Báo Hàm Render Để Gọi Dữ Liệu Vào
render(callback: (data:string) => any){
    let innerHTML = this.products.map(item =>{
        return `
            <tr>
              <id>${item.id}</id>
              <id>${item.name}</id>
              <id>${item.quatity}</id>
              <id>${item.price}</id>
              <id>${item.discount}</id>
            </tr> `
    }).join('')
  callback(innerHTML);
  }

}
