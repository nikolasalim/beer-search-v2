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
  searchTerm: string;
  selectedBeer: Beer[];

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  searchBeers(searchTerm) {
    return this.dataService.searchBeers(searchTerm).subscribe((beerList) => {
      this.beers = beerList;
    });
  }

  onSubmit(searchTerm, event: Event) {
    event.preventDefault();
    this.searchBeers(searchTerm);
  }

  onSelect(event) {
    this.selectedBeer = this.beers.filter(
      (b) => b.name === event.target.innerText
    );
  }
}
