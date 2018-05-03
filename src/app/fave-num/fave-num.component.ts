import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fave-num',
  templateUrl: './fave-num.component.html',
  styleUrls: ['./fave-num.component.css']
})
export class FaveNumComponent implements OnInit {

  faveNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
