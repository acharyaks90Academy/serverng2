import { Component, OnInit, EventEmitter,Output,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  constructor() { }
  newServerName = '';
  newServerContent = '';
  ngOnInit() {
  }
  onAddServer(inputName:HTMLInputElement) {

    this.serverCreated.emit({
      serverName:inputName.value,
      serverContent:this.newServerContent
    })
  }

  onAddBlueprint(inputName:HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName:inputName.value,
      serverContent:this.newServerContent
    })
  }

}
