import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'container',
    template: `
    product container
    <button (click)="backToIndex()">Back to home</button>
    <button (click)="clearHeader()">Clear header</button>
    <div class="header">
    <router-outlet  name="header"></router-outlet>
    </div>
    <div>
    <router-outlet name="body"></router-outlet>
    </div>
   
    `,
    styles : [`
     .header {
           border: solid 2px darkgreen;
            background: green;
            border-radius: 7px;
            box-shadow: 0px 5px 10px #222;
            margin-top: 10px;
            margin-bottom: 10px;
            padding: 5px;
     }
    `]
})

export class ProductContainerComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { 

    }

    backToIndex() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    clearHeader(){
        this.router.navigate([{ outlets: {header: null} }])
    }

    ngOnInit() { }
}