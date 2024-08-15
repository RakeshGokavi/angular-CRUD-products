import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ProductModel } from './product-dashboard.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  search() {
    throw new Error('Method not implemented.');
  }

  formValue !: FormGroup;
  productModelObj: ProductModel = new ProductModel();
  productData !: any;
  constructor(private formbuilder: FormBuilder, private api: ApiService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      productName: [''],
      productCategory: [''],
      productDescription: [''],
      createdDate: ['']
    })
    this.getAllProduct();
  }
  postProductDetails() {
    this.productModelObj.productName = this.formValue.value.productName;
    this.productModelObj.productCategory = this.formValue.value.productCategory;
    this.productModelObj.productDescription = this.formValue.value.productDescription;
    this.productModelObj.createdDate = this.getCurrentDateTime();
    console.log("this.productModelObj", this.productModelObj)
    this.api.postProduct(this.productModelObj)
      .subscribe(res => {
        console.log(res);
        alert("Product Added Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
      },
        err => {
          alert("Something went wrong");
        })
  }
  getAllProduct() {
    this.api.getProduct()
      .subscribe(res => {
        this.productData = res;
      })
  }
  getCurrentDateTime(): string {
    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss');
    console.log("date")
    if (formattedDate !== null) {
      return formattedDate;
    } else {
      return 'date is invalid';
    }
  }

  myFunction(event: KeyboardEvent): void {
    console.log("inside");
    let input = document.getElementById("myInput") as HTMLInputElement;
    let filter = input.value.toUpperCase();
    let table = document.getElementById("myTable");
    let tr = table?.getElementsByTagName("tr") ?? [];
    console.log("input", input,"filter", filter, table , tr );
    for (let i = 0; i < (tr?.length ?? 0); i++) {
      let td = tr[i]?.getElementsByTagName("td")[0];
      if (td) {
        let txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
}
