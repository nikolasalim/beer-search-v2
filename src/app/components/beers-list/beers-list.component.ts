import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Beer } from '../../models/Beer';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss'],
})
export class BeersListComponent implements OnInit {
  beers: Beer[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.searchBeers('hardcore').subscribe((beer) => {
      this.beers = beer;
      console.log('this.beers is', this.beers);
    });
  }
}
