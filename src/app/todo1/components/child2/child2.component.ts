import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interface/todo';
import { MainService } from '../../service/main-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { MyModalComponent } from '../my-modal/my-modal.component';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnInit {
  constructor(
    private mainService: MainService,
    private modalService: NgbModal
  ) {}
  todo$: Observable<Todo[]>;

  ngOnInit(): void {
    this.todo$ = this.mainService.subscribeToTodos();
  }

  onOpen(currentTodo: any) {
    const modalRef = this.modalService.open(MyModalComponent, {
      centered: true,
      keyboard: false,
      backdrop: 'static',
    });
    modalRef.componentInstance.todo = currentTodo;
    if (!currentTodo.completed) {
      this.mainService.updateTodo(currentTodo.id);
    }
  }
}
