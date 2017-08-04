import { TaskHeaderComponent } from './task-header.component';
import { TaskShellComponent } from './task-shell.component';
import { TaskComponent } from './task.component';

import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from "app/home.component";

let routes =[{
  path: '',
  component : HomeComponent,
},
{
  path: 'tasks',
  component : TaskShellComponent, 
  children : [
    {
      path: '',
      component : TaskHeaderComponent,
      outlet : 'task-header'
    },
    {
      path: '',
      component : TaskComponent,
      outlet : 'task-body'
    },
    {
      path: ':id',
      component : TaskShellComponent
    },
    {
      path: ':id',
      component : TaskHeaderComponent,
      outlet : 'task-header'
    },
    {
      path: ':id',
      component : TaskComponent,
      outlet : 'task-body'
    }
  ]
},
{
  path : '**',
  component: PageNotFoundComponent
}]

@NgModule({
  declarations: [
    AppComponent, 
    PageNotFoundComponent,
    HomeComponent,
    TaskComponent,
    TaskShellComponent,
    TaskHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
