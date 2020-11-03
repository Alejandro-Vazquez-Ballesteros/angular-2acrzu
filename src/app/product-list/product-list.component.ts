import { Component } from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products = products;

  //Este metodo se ejecuta desde el product-list.component.html
  share() {
    window.alert("Este es el mensaje de producto compartido");
  }

  onNotify(){
    window.alert("Seras notificado")
  }

}
