import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { parseArgs } from 'node:util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCRUDProducts';
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void{
    this.route.params.subscribe(params => {
      console.log("params",params);
    })
  }
}
