import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContributorsComponent } from './page/contributors/contributors.component';
import { ContributorViewComponent } from './page/contributor-view/contributor-view.component';
import { ContributorCardComponent } from './common/contributor-card/contributor-card.component';
import { RepoListComponent } from './page/repo-list/repo-list.component';
import { SorterPipe } from './pipe/sorter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContributorsComponent,
    ContributorViewComponent,
    ContributorCardComponent,
    RepoListComponent,
    SorterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
