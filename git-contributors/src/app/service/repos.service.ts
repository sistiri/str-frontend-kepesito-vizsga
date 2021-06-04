import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { Contributor } from '../model/contributor';
import { Repo } from '../model/repo';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  // [Példa egy felhasználó tárolóinak a lekérésére](https://api.github.com/users/cherryApp/repos)
  apiURL: string = 'https://api.github.com/users';
  
  list$: BehaviorSubject<Repo[]> = new BehaviorSubject<Repo[]>([]);

  
  constructor(
    public http: HttpClient,
  ) { }

  getAll(loginName: string | null): void {
    this.http.get<Repo[]>(`${this.apiURL}/${loginName}/repos`).subscribe (
      repos => this.list$.next(repos)
    );
  }

}
