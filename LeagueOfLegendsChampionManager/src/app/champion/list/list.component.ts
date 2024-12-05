import { Component, OnInit } from '@angular/core';
import { Champion } from '../../types/champion';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-champion-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ChampionListComponent implements OnInit {
  champions: Champion[] = [];
  isLoading = false;
  errorMessage: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchChampions();
  }

  fetchChampions(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.apiService.getChampions().subscribe(
      (data) => {
        this.champions = data;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'An error occurred while fetching champions.';
        this.isLoading = false;
      }
    );
  }
}
