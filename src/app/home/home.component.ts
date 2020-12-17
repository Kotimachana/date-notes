import { Component, OnInit } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';

export class Quicknotes {
  title: String;
  content: String;
  date: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  titleModel: String;
  contentModel: String;
  datemodule: string;
  quicknotes = [];
  notedata: boolean = false;

  constructor(public snackBar: MatSnackBar, public datePipe: DatePipe) {
    this.titleModel = '';
    this.contentModel = '';
    this.datemodule = '';
  }

  ngOnInit(): void {
    console.log(this.quicknotes.length)
    if (this.quicknotes.length > 0) {
      this.notedata = true
    } else {
      this.notedata = false
    }
  }
  createQuicknotes() {
    console.log(this.titleModel.length);
    console.log(this.contentModel);
    console.log(this.datemodule);
    this.datemodule = this.datePipe.transform(this.datemodule, 'dd-MM-yyyy');
    if (this.titleModel.length > 0 && this.contentModel.length > 0) {

      const newQuicknotes: Quicknotes = {
        title: this.titleModel,
        content: this.contentModel,
        date: this.datemodule
      };
      this.notedata = true
      this.quicknotes.push(newQuicknotes);
      this.titleModel = this.datemodule = this.contentModel = '';
    } else {
      this.snackBar.open("Please Fill Title,date and Content fields", '', {
        duration: 3000,
        panelClass: ['blue-snackbar'],
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  }
}
