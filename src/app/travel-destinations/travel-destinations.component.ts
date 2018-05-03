import { Component, OnInit } from '@angular/core';

import { Destination, destinationList } from './destination-data';

@Component({
  selector: 'app-travel-destinations',
  templateUrl: './travel-destinations.component.html',
  styleUrls: ['./travel-destinations.component.css']
})
export class TravelDestinationsComponent implements OnInit {

  selectedDest: string;
  destinations: Array<Destination> = destinationList;

  constructor() { }

  ngOnInit() {
  }

}
