import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private fb:FormBuilder,private ps:ProductserviceService,private router:Router){ }

  addProductForm=this.fb.group({
    id:[''],
    productName: [''],
    categoryId: [''],
    Description:[''],
    is_available:[''],
    Price:[''],
    ProductImage: [''],
    rating:[''],
    review: [''],
    warrenty:['']
  })

  addNewProduct(){
    let newProductData={
      id:this.addProductForm.value.id,
      productName:this.addProductForm.value.productName,
      categoryId:this.addProductForm.value.categoryId,
      Description:this.addProductForm.value.Description,
      is_available:this.addProductForm.value.is_available,
      Price:this.addProductForm.value.Price,
      ProductImage: this.addProductForm.value.ProductImage,
      rating:this.addProductForm.value.rating,
      review:this.addProductForm.value.review,
      warrenty:this.addProductForm.value.warrenty
    }

    this.ps.addProduct(newProductData).subscribe((item:any)=>{
      alert('product added')
      this.router.navigateByUrl('product')
    })
  }

}
