import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
    "id": 1,
    "Name": "Birla House",
    "Type": "House",
    "Price": 12000
  },
  {
    "id": 1,
    "Name": "merry house",
    "Type": "House",
    "Price": 12000
  },
  {
    "id": 2,
    "Name": "Birla House",
    "Type": "House",
    "Price": 12000
  },
  {
    "id": 1,
    "Name": "Birla House",
    "Type": "House",
    "Price": 12000
  },
  {
    "id": 1,
    "Name": "Birla House",
    "Type": "House",
    "Price": 12000
  },
  {
    "id": 1,
    "Name": "Birla House",
    "Type": "House",
    "Price": 12000
  }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
