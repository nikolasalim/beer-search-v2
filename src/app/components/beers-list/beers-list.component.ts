import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss'],
})
export class BeersListComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .searchBeers()
      .subscribe((beer) => console.log('beer is:', beer));
  }
}
