import { Component, ViewChild , AfterViewInit} from '@angular/core';
import { PostComponent } from './post/post.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string='';
  address: string='';
  email: string='';
  user: Array<any> = []; 
  onClick(){
    this.user.push({
      "name": this.name, 
      "add": this.address, 
      "email": this.email});
      console.log(this.user);
  }
  
}
