import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  list:string = "list of posts";
  messagePost: string = "Message post";
  postParentMessage: string = 'message coming from the post parent ';
  childMessage: string = 'from child component';
  outputChildMessage: string ='Message from child component via output';


  @Input() fromParent: string | undefined;
  @Output() messageEvent = new EventEmitter<string>();
  constructor(){}

  ngOnInit(): void {
    
  }
  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }
  
}
