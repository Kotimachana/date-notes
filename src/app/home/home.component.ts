import { Component, OnInit,ViewChild  } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


export interface Quicknotes {
  s_no: number;
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
  postdata: any;
  nteDtls: any;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Quicknotes>(this.nteDtls);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public snackBar: MatSnackBar, public datePipe: DatePipe, private http: HttpClient) {
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
    this.getdatenotes();
  }
  getdatenotes() {
    const rte = 'notes/Select-Datenote'
    return this.http.get(rte).subscribe((res) => {
      this.nteDtls = res['data'];
    })
  }
  createQuicknotes() {
    console.log(this.titleModel.length);
    console.log(this.contentModel);
    console.log(this.datemodule);
    this.datemodule = this.datePipe.transform(this.datemodule, 'dd-MM-yyyy');
    if (this.titleModel.length > 0 && this.contentModel.length > 0) {
      this.postdata = {
        nte_nm: this.titleModel,
        nte_cnt: this.contentModel,
        nte_dt: this.datemodule
      }

      const rte = `notes/Insert-Datenote`;
      return this.http.post(`/${rte}`, { data: this.postdata }).subscribe((res) => {
        if (res['status'] == 200) {
          this.snackBar.open("Sucessfully Inserted", '', {
            duration: 2000,
            panelClass: ['blue-snackbar'],
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          this.getdatenotes();
        }
      })
      // const newQuicknotes: Quicknotes = {
      //   title: this.titleModel,
      //   content: this.contentModel,
      //   date: this.datemodule
      // };
      // this.notedata = true
      // this.quicknotes.push(newQuicknotes);
      // this.titleModel = this.datemodule = this.contentModel = '';
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
