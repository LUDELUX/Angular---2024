import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Champion } from '../../types/champion';

@Component({
  selector: 'app-champion-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ChampionListComponent implements OnInit {
  champions: Champion[] = [];
  errorMessage: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadChampions();
  }

  loadChampions(): void {
    this.apiService.getAllChampions().subscribe(
      (champions) => {
        this.champions = champions;
        this.errorMessage = null;
      },
      (error) => {
        this.errorMessage = 'An error occurred while loading the champions.';
        console.error(error);
      }
    );
  }
}
