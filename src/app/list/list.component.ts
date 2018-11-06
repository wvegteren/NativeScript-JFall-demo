import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-list',
  templateUrl: './list.component.html',
  moduleId: module.id,
})
export class ListComponent implements OnInit {

  devices: any[];

  constructor() { }

  ngOnInit() {
  }

  startScanning() {
    this.devices = [];

    this.devices.push({
      UUID: '1234-567890-abc',
      name: 'Demo 1',
    });
    this.devices.push({
      UUID: '2345-567890-abc',
      name: 'Demo 2',
    });
    this.devices.push({
      UUID: '3456-567890-abc',
      name: 'Demo 3',
    });
  }

}
