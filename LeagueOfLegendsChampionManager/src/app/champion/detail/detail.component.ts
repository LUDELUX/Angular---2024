import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Champion } from '../../types/champion';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class ChampionDetailComponent implements OnInit {
  champion: Champion | null = null;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const championId = this.route.snapshot.paramMap.get('championId')!;
    this.fetchChampionDetail(championId);
  }

  fetchChampionDetail(championId: string): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.apiService.getChampionDetail(championId).subscribe(
      (data) => {
        this.champion = data;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'An error occurred while fetching champion details.';
        this.isLoading = false;
      }
    );
  }
}
