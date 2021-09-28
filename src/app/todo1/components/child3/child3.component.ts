import { Component, OnInit } from '@angular/core';
import { Users } from '../../interface/user';
import { MainService } from '../../service/main-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css'],
})
export class Child3Component implements OnInit {
  constructor(private mainService: MainService) {}
  users$: Observable<Users[]>;

  ngOnInit(): void {
    this.users$ = this.mainService.subscribeToUsers();
  }
}
