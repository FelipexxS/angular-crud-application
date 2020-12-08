import { HeaderService } from './../../template/header/header.service';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { ProductService } from "./../product.service";
import { Product } from "./../product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService,
  ) {
    this.headerService.headerData = {
      title: 'Exclusão de Produto',
      icon: 'delete_outline',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id"); // + converte para number
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage("Produto Excluído com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
