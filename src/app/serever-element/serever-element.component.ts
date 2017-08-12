import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-serever-element',
  templateUrl: './serever-element.component.html',
  styleUrls: ['./serever-element.component.css']
})
export class SereverElementComponent implements OnInit {
  @Input('srvElement') element:{type:string,name:string,content:string};
  constructor() { }

  ngOnInit() {
  }

}
