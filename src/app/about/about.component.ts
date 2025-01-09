import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}


  pathVariable: any;

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.pathVariable = this.activatedRoute.snapshot.params['pathVariable'];
  }

}
