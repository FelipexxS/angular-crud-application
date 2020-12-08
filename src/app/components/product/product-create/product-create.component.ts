import { HeaderService } from './../../template/header/header.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ToNumberDirective } from './../../../directives/to-number.directive';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router, 
    private toNumber: ToNumberDirective,
    private headerService: HeaderService,
  ) { 
    this.headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'playlist_add',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.product = { name: this.product.name, price: this.toNumber.numberParser(this.product.price) };
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!');
      this.router.navigate(['/products']);
    });

    
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
