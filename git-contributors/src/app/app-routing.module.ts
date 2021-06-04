import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ContributorViewComponent } from './page/contributor-view/contributor-view.component';
import { ContributorsComponent } from './page/contributors/contributors.component';
import { RepoListComponent } from './page/repo-list/repo-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContributorsComponent,
  },

  {
    path: 'contributors',
    component: ContributorsComponent,
  },

  // {
  //   path: 'contributors/:id',
  //   component: ContributorViewComponent,
  // },

  {
    path: 'contributors/:login',
    component: RepoListComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
