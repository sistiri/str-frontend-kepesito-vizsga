import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contributor } from 'src/app/model/contributor';
import { ContributorService } from 'src/app/service/contributors.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {

  contributorList$: BehaviorSubject<Contributor[]> = this.contributorService.list$;
  some: number = 0;

  constructor(
    private contributorService: ContributorService,
  ) { }

  ngOnInit(): void {
    this.contributorService.getAll();
  }

  // onScrollingFinished() {
  //   console.log('load more');
  //   this.contributorService.getSome(this.some + 30);
  //   this.some += 30;
  // }

}
