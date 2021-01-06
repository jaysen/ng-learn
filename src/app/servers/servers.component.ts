import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreateStatus = "no server created as yet..."
  serverName = '';

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.allowNewServer = false;
    this.serverCreateStatus = "A new server was created with name of " + this.serverName;
    setTimeout(()=> {
      this.allowNewServer = true;
    },1000);
  }

  onUpdateServerName(event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
