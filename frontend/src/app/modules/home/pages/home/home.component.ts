import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  checkboxList: string[] = [
    'Electronics',
    'Microcontroladores',
    'Food or beverage',
    'Plants',
    'Wood tools',
    'Textiles',
    'Laser cutter, cnn, 3D ',
    'Craft',
    'Other tools'
  ];
  radioList: string[] = [
    'Technology',
    'Workshop',
    'Craft',
    'Home',
    'Food',
    'Play',
    'Outside',
    'Costumes'
  ];
  radioListLevel: string[] = [
    'Beginner',
    'Expert'
  ];


  constructor() { }

  ngOnInit() {
  }

}
