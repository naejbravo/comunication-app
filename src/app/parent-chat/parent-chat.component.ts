import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-chat',
  templateUrl: './parent-chat.component.html',
  styleUrls: ['./parent-chat.component.scss'],
})
export class ParentChatComponent implements OnInit {
  public arrayText: string[] = [];
  public text: string = '';
  public sonText: string = '';
  public arrayPhone2: string[] = [];
  constructor() {}
  public sendMessage(message: string): void {
    this.text = message;
    this.arrayText.push(message);
    console.log(this.arrayText);
  }

  public getMessage(message: string): void {
    this.sonText = message;
  }

  public getArray(message: any) {
    this.arrayPhone2 = message;
    console.log(message);
  }

  ngOnInit(): void {}
}
