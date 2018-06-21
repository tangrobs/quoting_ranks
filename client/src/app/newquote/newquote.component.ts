import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }  from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})
export class NewquoteComponent implements OnInit {
  curauthor:{};
  validationMessage:string[];

  constructor(
    private route: ActivatedRoute,
    private authorsService: AuthorsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.curauthor = {}
    this.route.params.subscribe(params=>{
      this.authorsService.getOne(params['id']).subscribe(data=>{
        this.curauthor = data
      })
    })
  }
  submit(quote){
    this.validationMessage = []
    this.authorsService.createQuote(this.curauthor['_id'],quote).subscribe(data=>{
      if(data['errors']){
        for(let key in data['errors']){
          this.validationMessage.push(data['errors'][key].message)
        }
      }else{
        this.router.navigate(['/quotes/',this.curauthor['_id']])
      }
    })
  }

}
