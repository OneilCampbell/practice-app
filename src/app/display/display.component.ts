import { Component, OnInit } from '@angular/core';
import { PracticeDataService } from '../services/practice-data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  // TODO: specify type of dataToDisplay
  dataToDisplay;

  constructor(
    private dataService: PracticeDataService
  ) { }

  ngOnInit() {
    this.getDataToDisplay()
  }

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
