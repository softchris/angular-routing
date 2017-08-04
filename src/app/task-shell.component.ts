import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'task-shell',
    template : `
    task shell component
    <router-outlet name="task-header"></router-outlet>
    <router-outlet name="task-body"></router-outlet>
    `
})

export class TaskShellComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}