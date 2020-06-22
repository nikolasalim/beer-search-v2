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
  isMobile: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    if (window.screen.width <= 768) {
      this.isMobile = true;
    }
  }

  searchBeers(searchTerm) {
    return this.dataService.searchBeers(searchTerm).subscribe((beerList) => {
      this.beers = beerList;
      this.selectedBeer = null;
    });
  }

  searchRandomBeer() {
    return this.dataService.searchRandomBeer().subscribe((beer) => {
      this.selectedBeer = beer;
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
