import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stud-request',
  templateUrl: './stud-request.component.html',
  styleUrls: ['./stud-request.component.css']
})
export class StudRequestComponent implements OnInit {

  @Input() BottomSheetOverviewExampleSheet;
  constructor() { }

  ngOnInit() {
  }

}
