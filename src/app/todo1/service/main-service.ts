import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../interface/todo';
import { Users } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class MainService implements OnInit {
  allTodos$: BehaviorSubject<Todo[]>;
  allUsers$: BehaviorSubject<Users[]>;
  constructor(private http: HttpClient) {
    this.getTodo();
    this.getUsers();
  }

  ngOnInit() {}

  getTodo() {
    if (!this.allTodos$) {
      this.allTodos$ = <BehaviorSubject<Todo[]>>(
        new BehaviorSubject(new Array<Todo>())
      );
      this.http
        .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .subscribe(
          (data: Todo[]) => {
            this.allTodos$.next(data);
          },
          (error: any) => {
            console.error('error', error);
          }
        );
    }
  }
  subscribeToTodos(): Observable<Todo[]> {
    return this.allTodos$.asObservable();
  }

  getUsers() {
    if (!this.allUsers$) {
      this.allUsers$ = <BehaviorSubject<Users[]>>(
        new BehaviorSubject(new Array<Users>())
      );
      this.http
        .get<Users[]>('http://localhost:4200/assets/employee.json')
        .subscribe(
          (data: any) => {
            console.log('data', data);
            this.allUsers$.next(data.data);
          },
          (error: any) => {
            console.error('error', error);
          }
        );
    }
  }

  updateTodo(id: any) {
    this.http
      .patch(`https://jsonplaceholder.typicode.com/todos/` + id, {
        completed: true,
      })
      .subscribe(
        (data: any) => {
          console.log('data', data);
        },
        (error) => {
          console.log('error', error);
        }
      );
  }
  subscribeToUsers(): Observable<Users[]> {
    return this.allUsers$.asObservable();
  }
}
