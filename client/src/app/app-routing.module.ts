import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllauthorsComponent } from './allauthors/allauthors.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { QuotesComponent } from './quotes/quotes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewquoteComponent } from './newquote/newquote.component';

const routes: Routes = [
  { path: "", component: AllauthorsComponent },
  { path: "new", component: NewComponent },
  { path: "edit/:id", component: EditComponent },
  { path: 'error/:id', component: PageNotFoundComponent },
  { path: 'quotes/:id', component: QuotesComponent },
  { path: 'write/:id', component: NewquoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
