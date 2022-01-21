import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-chat',
  templateUrl: './child-chat.component.html',
  styleUrls: ['./child-chat.component.scss'],
})
export class ChildChatComponent implements OnInit {
  @Input() public text: string = '';
  @Input() public arrayText: string[] = [];
  @Output() public emitMessage = new EventEmitter<string>();
  @Output() public emitArray = new EventEmitter<any>();
  public messages: string[] = [];

  public sendMessage(message: string) {
    this.emitMessage.emit(message);
    this.sendArray(message);
  }

  public sendArray(message: string) {
    this.messages.push(message);
    this.emitArray.emit(this.messages);
  }

  constructor() {}

  ngOnInit(): void {}
}
