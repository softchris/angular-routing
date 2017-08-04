import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'productheadercomponent',
    template : ` product header <button (click)="clearHeader()">Close</button>
    `
})

export class ProductHeaderComponent implements OnInit {
    constructor(private router: Router) { 

    }

    ngOnInit() { }

    clearHeader(){
        this.router.navigate([{ outlets: { header: null } }]);
    }
}