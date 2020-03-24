import { Component } from '@angular/core';

@Component({
    selector : 'app-products',
    template : `
        <br/>
        <br/>
        <h1>Products</h1>
        <hr>
        <label>Product Name : </label>
        <input type="text" />
        <input type="button" value="Add New" />
        <ul>
            <li *ngFor="let productName of productNames">
                <div>
                    <div>{{productName}}</div>
                    <input type="button" value="Remove" />
                </div>
            </li>
        </ul>
    `
})
export class ProductsComponent{
    productNames : string[] = [ 'Pen', 'Pencil' ];
}