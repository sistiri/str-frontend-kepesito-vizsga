import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contributor } from '../model/contributor';

@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  apiURL: string = 'https://api.github.com/repos/angular/angular/contributors'

  // [Az Angular GitHub adattár 25 legjelentősebb közreműködőjének lekérdezése]
  // (https://api.github.com/repos/angular/angular/contributors?page=1&per_page=25)

  list$: BehaviorSubject<Contributor[]> = new BehaviorSubject<Contributor[]>([])

  constructor(
    public http: HttpClient
  ) { }


  // getAll(): Observable<Contributor[]> {
  //   return this.http.get<Contributor[]>(this.apiURL);
  // }
  
  getAll(): void {
    this.http.get<Contributor[]>(this.apiURL).subscribe (
      contributors => this.list$.next(contributors)
    );
  }

  getSome(some: number): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(`${this.apiURL}?page=1&per_page=${some}`);
  }
}
