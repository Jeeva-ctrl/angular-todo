import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../interface/todo';
import { Users } from '../../interface/user';
import { MainService } from '../../service/main-service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component implements OnInit {
  constructor(private mainService: MainService) {}
  todos$: Observable<Todo[]>;
  users$: Observable<Users[]>;

  ngOnInit(): void {
    this.todos$ = this.mainService.subscribeToTodos();
    this.users$ = this.mainService.subscribeToUsers();
    console.log('this', this.users$);
  }
}
