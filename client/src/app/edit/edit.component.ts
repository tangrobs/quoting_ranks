import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author:{}
  validationMessage:string[] 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorsService: AuthorsService
  ) { }

  ngOnInit() {
    this.validationMessage = []
    this.author = {name:""}
    let id = this.route.snapshot.paramMap.get('id')
    this.authorsService.getOne(id).subscribe(author=>{
      if(!author['_id']){
        this.router.navigate(['/error/'+id])
      }else{
        this.author = author
      }
    })
  }
  submit(){
    this.validationMessage = []
    console.log(this.author['_id']);
    console.log(this.author);
    this.authorsService.update(this.author['_id'],this.author).subscribe(data=>{
      if(data['errors']){
        for(let key in data['errors']){
          this.validationMessage.push(data['errors'][key].message)
        }
      }else{
        this.router.navigate(['/'])
      }
    })
  }


}
