import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../../models/Beer';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss'],
})
export class BeerDetailsComponent implements OnInit {
  constructor() {}

  @Input() beerInfo: Beer[];

  ngOnInit(): void {}
}
