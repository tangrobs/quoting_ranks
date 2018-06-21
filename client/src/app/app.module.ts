import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllauthorsComponent } from './allauthors/allauthors.component';
import { AuthorsService } from './authors.service';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewquoteComponent } from './newquote/newquote.component';


@NgModule({
  declarations: [
    AppComponent,
    AllauthorsComponent,
    NewComponent,
    EditComponent,
    PageNotFoundComponent,
    QuotesComponent,
    NewquoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
