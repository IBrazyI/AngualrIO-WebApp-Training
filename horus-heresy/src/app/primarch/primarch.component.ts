import { Component, OnInit } from '@angular/core';
import { Primarch } from '../primarch';

@Component({
  selector: 'app-primarch',
  templateUrl: './primarch.component.html',
  styleUrls: ['./primarch.component.sass']
})
export class PrimarchComponent implements OnInit {

  primarch: Primarch = {
    id: 1,
    name: "Lion El'Jonson"
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
