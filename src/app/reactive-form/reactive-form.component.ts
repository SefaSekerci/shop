import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Product } from '../product/product';
import { Category } from '../category/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  providers: [CategoryService]
})
export class ReactiveFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) { }

  productAddForm: FormGroup;

  product: Product = new Product();
  categories: Category[];

  ngOnInit(): void {
    this.createProductAddFrom();
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createProductAddFrom() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageURL: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required]
    });
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value);
    }
  }

}
