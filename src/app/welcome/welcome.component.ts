import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = "Some Welcome message"
  name = ""
  constructor(private router:ActivatedRoute) { }

  //void init
  ngOnInit() {
    this.name = this.router.snapshot.params["name"]
    console.log(this.message + " "+ this.name)

  }

}
