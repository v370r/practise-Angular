import { Component, OnInit } from '@angular/core';


export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})


export class ListTodosComponent implements OnInit {
  // todo ={
  //   id :1,description :"Learn to Dance"
  // }
  // todos =[ this.todo,
  //          {id:2,description:"Learn Microservices"},
  //          {id:3,description:"Visit India"}

  // ]
  todos =[
    new Todo(1,"Learn to Dance",false,new Date()),
    new Todo(2,"Learn Microservices",false,new Date()),
    new Todo(3,"Visit India",false,new Date()),
  ]

  constructor() { }

  ngOnInit() {
  }

}
