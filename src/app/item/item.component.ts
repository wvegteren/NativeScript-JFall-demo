import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextField } from 'tns-core-modules/ui/text-field';

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
  }

  public onTextChange(args) {
    let textField = <TextField>args.object;
    this.message = textField.text;
  }

  send(message: string = this.message) {
    this.messages.unshift(message);
    this.message = "";
  }
}
