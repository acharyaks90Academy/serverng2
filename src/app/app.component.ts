import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'Tes Serve',content:'A just testing'}];
  
  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluepritnData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluepritnData.serverName,
      content: bluepritnData.serverContent
    });

  }

  onChangeFirst(){
    console.log('ng After Content init called');
    this.serverElements[0].name="Change"
  }
  onDestroyFirst(){
    
    this.serverElements.splice(0,1);
  }
  
}
