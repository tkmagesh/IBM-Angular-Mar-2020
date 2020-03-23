import { Component } from '@angular/core';

@Component({
    selector : 'app-greeter',
    templateUrl : 'greeter.component.html',
    styleUrls : ['greeter.component.css']
})
export class GreeterComponent {
    message : string = '[Default greet message]'

    onGreetClick(userName : string){
        this.message = `Hi ${userName}, Have a corona free day!`;
    }
}