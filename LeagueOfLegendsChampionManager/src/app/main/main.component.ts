import { Component } from '@angular/core';
import { ChampionListComponent } from '../champion/list/list.component';
import { UserService } from '../user/user.service';
import { HomeComponent } from '../home/home.component';
import { ChampionDetailComponent } from '../champion/detail/detail.component';

@Component({
  selector: 'app-main',
  imports: [ChampionDetailComponent, ChampionListComponent, HomeComponent],
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  constructor(private userService: UserService) {}
}
