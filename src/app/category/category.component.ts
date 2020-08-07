import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  title: string = "Kategori Listesi"
  // categories: Category[] = [
  //   { categoryId: 1, name: "Bilgisayar" },
  //   { categoryId: 2, name: "Telefon" },
  //   { categoryId: 3, name: "Müzik" }
  // ]
  categories: Category[];

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

}
