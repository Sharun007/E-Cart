import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  productid:any
  productdata:any 

  constructor(private ar:ActivatedRoute,private ps:ProductserviceService,private router:Router) { }

  ngOnInit(): void{
    this.ar.params.subscribe((data:any)=>{
      this.productid=data["id"]
    })

    this.ps.viewproduct(this.productid).subscribe((item:any)=>{
       this.productdata=item
    })
  }
  updateproduct(form:any){
    let updateproduct={
      
        id:form.value.id ,
        productName:form.value.productName  ,
        categoryId:form.value.categoryId,
        Description:form.value.Description,
        is_available:form.value.is_available,
        Price:form.value.Price,
        ProductImage:form.value.ProductImage,
        rating:form.value.rating,
        review:form.value.review,
        warrenty:form.value.warrenty  
      
    }
     this.ps.updateproduct(this.productid,this.productdata).subscribe((item:any)=>{
      alert("product details updated")
      this.router.navigateByUrl("product")
     })
  }
    
}
