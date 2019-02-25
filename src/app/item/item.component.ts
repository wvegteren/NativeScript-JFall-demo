import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextField } from 'tns-core-modules/ui/text-field';
import bluetooth = require('nativescript-bluetooth');
import { Peripheral, WriteOptions } from 'nativescript-bluetooth';

@Component({
  selector: 'ns-item',
  templateUrl: './item.component.html',
  moduleId: module.id,
})
export class ItemComponent implements OnInit {

  UUID: string;
  message:string ="";
  messages: string[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.UUID = this.route.snapshot.params["uuid"];
    this.connect(this.UUID);
  }

  public onTextChange(args) {
    let textField = <TextField>args.object;
    this.message = textField.text;
  }

  send(message: string = this.message) {
    this.messages.unshift(message);
    this.message = "";
    this.write(this.UUID, message);
  }

  connect(UUID: string) {
    return bluetooth.connect({
      UUID: UUID,
      onConnected: (peripheral) => {
        console.log('Connected :-)');
      },
      onDisconnected: (peripheral) => {
        alert('Ooops, couldn\'t connect');
      }
    });
  }

  write(UUID: string, message: string): void {
    let options: WriteOptions = {
      peripheralUUID: UUID,
      serviceUUID: 'ffe0',
      characteristicUUID: 'ffe1',
      value: this.convertToHexString(message).join(',')
    }
    bluetooth.writeWithoutResponse(options);
  }

  private convertToHexString(message: string): string[] {
    let messageToSend: string[] = [];

    // control characters
    messageToSend.push('0x' + 't'.charCodeAt(0).toString(16));
    messageToSend.push('0x' + '‘'.charCodeAt(0).toString(16));

    for (let i = 0; i < message.length; i++) {
      messageToSend.push('0x' + message.charCodeAt(i).toString(16));
    }

    return messageToSend;
  }
}
