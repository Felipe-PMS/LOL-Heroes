import { Component } from '@angular/core';
import { Hero, heroes } from '../../../heroes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  heroList: Hero[] = [];
  loading: boolean = true;

  ngOnInit() {
    this.loadHeroes()
  }

  loadHeroes() {
    setTimeout(() => {
      this.heroList = heroes;
      this.loading = false;
    }, 3000);
  }
}
