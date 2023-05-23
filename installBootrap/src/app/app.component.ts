import { AfterViewInit, Component } from '@angular/core';
import { Product } from './product/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{



  title = 'installBootrap';
  products : Product [] = [
    { id:1,name:'hat', quatity:100,price:300, discount:10 },
    { id:2,name:'T-shirt', quatity:100,price:300, discount:20 },
    { id:3,name:'Jean', quatity:100,price:100, discount:10 }
  ]

  // Phương thức này được khỏi tạo khi ta kkhai báo implement trên Appcomponent
  ngAfterViewInit(): void {
      this.render(this.show);
  }
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
          <div>
              <p>ID: ${item.id}</p>
              <p>Name: ${item.name}</p>
              <p>Quatity: ${item.quatity}</p>
              <p>Price: ${item.price}</p>
              <p>Discount: ${item.discount}</p>
              <p>  <button id="${item.id}" class="btn btn-secondary" >Buy Now</button></p>
          </div>`


    }).join('')
  callback(innerHTML);
  }

}
