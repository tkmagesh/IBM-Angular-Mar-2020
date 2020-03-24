import { Component } from '@angular/core';

@Component({
    selector : 'app-products',
    template : `
        <br/>
        <br/>
        <h1>Products</h1>
        <hr>
        <label>Product Name : </label>
        <input type="text" #newProductName />
        <input type="button" value="Add New" (click)="onAddNewClick(newProductName.value)" />
        <ul>
            <li *ngFor="let productName of productNames">
                <div>
                    <div>{{productName}}</div>
                    <input type="button" value="Remove" (click)="onRemoveClick(productName)" />
                </div>
            </li>
        </ul>
    `
})
export class ProductsComponent{
    productNames : string[] = [];

    onAddNewClick(productName : string){
        this.productNames.push(productName);
    }

    onRemoveClick(productToRemove : string){
        console.log('remove button clicked ', productToRemove);
        this.productNames.splice(this.productNames.indexOf(productToRemove), 1);
    }
}