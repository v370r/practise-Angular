import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  error = "An error has occured please contact customer support "

  constructor() { }

  ngOnInit() {
  }

}
