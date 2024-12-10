import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Champion } from './types/champion';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(`${this.apiUrl}/champions`);
  }

  getChampionDetail(championId: string): Observable<Champion> {
    return this.http.get<Champion>(`${this.apiUrl}/champions/${championId}`);
  }

  createChampion(champion: Champion): Observable<Champion> {
    return this.http.post<Champion>(`${this.apiUrl}/champions`, champion);
  }
  
  updateChampion(championId: string, champion: Champion): Observable<Champion> {
    return this.http.put<Champion>(`${this.apiUrl}/champions/${championId}`, champion);
  }

  deleteChampion(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/champions/${id}`);
  }
}
