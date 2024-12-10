import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Champion } from '../../types/champion';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class ChampionDetailComponent implements OnInit {
  champion: Champion | null = null;
  isModalOpen: boolean = false;
  isLoggedIn: boolean = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private userService: UserService 
  ) {}

  ngOnInit(): void {
    this.loadChampion();
    this.checkLoginStatus();
  }

  loadChampion(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getChampionDetail(id).subscribe(
        (champion) => {
          this.champion = champion;
        },
        (error) => {
          console.error('Error loading champion:', error);
        }
      );
    }
  }

  checkLoginStatus(): void {
    this.userService.getProfile().subscribe({
      next: () => {
        this.isLoggedIn = true;
      },
      error: () => {
        this.isLoggedIn = false;
      },
    });
  }

  openEditModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  onSaveChampion(updatedChampion: Champion): void {
    if (this.champion && this.champion._id) {
      this.apiService.updateChampion(this.champion._id, updatedChampion).subscribe(
        (updatedChampion) => {
          this.champion = updatedChampion;
          this.loadChampion();
          this.closeModal();
        },
        (error) => {
          console.error('Error updating champion:', error);
        }
      );
    } else {
      console.error('Champion ID is missing');
    }
  }

  deleteChampion(): void {
    if (this.champion && this.champion._id) {
      this.apiService.deleteChampion(this.champion._id).subscribe(
        () => {
          alert('Champion deleted successfully');
        },
        (error) => {
          console.error('Error deleting champion:', error);
        }
      );
    }
  }
}
