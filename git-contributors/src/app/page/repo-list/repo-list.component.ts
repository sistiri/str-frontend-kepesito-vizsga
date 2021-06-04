import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Contributor } from 'src/app/model/contributor';
import { Repo } from 'src/app/model/repo';
import { ReposService } from 'src/app/service/repos.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  repoList$: BehaviorSubject<Repo[]> = this.reposService.list$;
  // contributor: Contributor = new Contributor;
  loginName: string | null = '';
  key: string = 'updated_at';

  constructor(
    private route: ActivatedRoute,
    private reposService: ReposService,
  ) { }

  ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
      this.loginName = params.get('login')
  })

  this.reposService.getAll(this.loginName)

  }

}
