import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  curauthor:{}

  constructor(
    private route: ActivatedRoute,
    private authorsService: AuthorsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params=>this.getAuthor(params['id']))
  }
  getAuthor(id){
    this.authorsService.getOne(id).subscribe(data=>this.curauthor = data)
  }
  delete(quoteid){
    this.authorsService.deleteQuote(quoteid, this.curauthor['_id']).subscribe(data=>this.getAuthor(this.curauthor['_id']))
  }
  vote(id,num){
    this.authorsService.voteQuote(id, this.curauthor['_id'], num).subscribe(data=>this.getAuthor(this.curauthor['_id']))
  }

}
