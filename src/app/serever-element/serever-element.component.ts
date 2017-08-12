import { Component, 
  OnInit, 
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  SimpleChanges,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy

} from '@angular/core';

@Component({
  selector: 'app-serever-element',
  templateUrl: './serever-element.component.html',
  styleUrls: ['./serever-element.component.css']
})
export class SereverElementComponent implements OnInit ,OnChanges, DoCheck,AfterContentInit,AfterViewInit,
AfterViewChecked,OnDestroy {
  @Input('srvElement') element:{type:string,name:string,content:string};
  @Input() name;
  constructor() { 
    console.log('constructor called ');
  }

  ngOnInit() {
    console.log('ngon init called');
  }
  ngOnChanges(changes:SimpleChanges){
    console.log('ngon changes called'+changes);
  }
  ngDoCheck(){
    console.log('ng Do checks called');
  }

  ngAfterContentInit(){
    console.log('ng After Content init called');
  }

  ngAfterViewInit(){
    console.log('ng After view init called');
  };
  ngAfterViewChecked(){
    console.log('ng After view checked called');
  }
  ngOnDestroy(){
    console.log('onDestroy called')
  }

  

}
