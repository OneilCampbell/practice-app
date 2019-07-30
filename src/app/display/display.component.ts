import { Component, OnInit } from '@angular/core';

import { PracticeDataService } from '../services/practice-data.service';
import { ChatService } from '../services/chat/chat.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  // TODO: specify type of dataToDisplay
  dataToDisplay;

  message: string = '';

  constructor(
    private dataService: PracticeDataService,
    public chatService: ChatService
  ) { }

  ngOnInit() {
    this.getDataToDisplay()
  }

  //----------------------------------
  // METHODS FOR CHAT FUNCTIONALITY
  // ---------------------------------

  //uses chatService's sendMessage method to send message user typed in to the server
  //then clears the input field/resets the value of message
  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }






  // -------------------------------------
  // METHODS FOR INTERACTING WITH DATABASE
  // -------------------------------------

  getDataToDisplay(): void {
    this.dataService.getData().subscribe(
      data => this.dataToDisplay = data
    );
  }

  // TODO: implement
  updateData(data): void {

  }

  createData(data): void {
    this.dataService.createData(data).subscribe()
  }

  deleteData(id: number): void {
    this.dataService.deleteData(id).subscribe()
  }
}
