import { Component, Input, OnInit } from '@angular/core';
import { Contributor } from 'src/app/model/contributor';
import { ContributorService } from 'src/app/service/contributors.service';

@Component({
  selector: 'app-contributor-card',
  templateUrl: './contributor-card.component.html',
  styleUrls: ['./contributor-card.component.scss']
})
export class ContributorCardComponent implements OnInit {

  @Input() contributor: Contributor = new Contributor();

  constructor(
    private contributorService: ContributorService,
  ) { }

  ngOnInit(): void {
  }

}
