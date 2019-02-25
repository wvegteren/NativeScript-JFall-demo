import { Component, OnInit } from '@angular/core';
import bluetooth = require('nativescript-bluetooth');
import { Peripheral, WriteOptions } from 'nativescript-bluetooth';

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

    bluetooth.startScanning({
      serviceUUIDs: ['ffe0'],
      seconds: 3,
      skipPermissionCheck: false,

      onDiscovered: (peripheral) => {
        if (peripheral.name) {
          this.devices.push(peripheral);
        }
      }
    });
  }

}
