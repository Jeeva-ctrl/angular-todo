import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Todo1RoutingModule } from './todo1/todo1-routing-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { Child1Component } from './todo1/components/child1/child1.component';
import { Child2Component } from './todo1/components/child2/child2.component';
import { Child3Component } from './todo1/components/child3/child3.component';
import { MyModalComponent } from './todo1/components/my-modal/my-modal.component';
import { ParentComponent } from './todo1/components/parent/parent.component';
import { FilterByCondition } from './todo1/pipes/filter-by-condition';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    MyModalComponent,
    ParentComponent,
    FilterByCondition,
  ],
  imports: [BrowserModule, HttpClientModule, Todo1RoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MyModalComponent],
})
export class AppModule {}
