import { Component } from '@angular/core';

@Component({
    selector : 'app-greeter',
    templateUrl : 'greeter.component.html',
    styleUrls : ['greeter.component.css']
})
export class GreeterComponent {
    message : string = '[Default greet message]'
    userName: string = '';

    setUserName(userName : string){
        this.userName = userName;
    }
    
    onGreetClick(){
        this.message = `Hi ${this.userName}, Have a corona free day!`;
    }
}