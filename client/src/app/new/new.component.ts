import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  validationMessage:string[] 
  
  constructor(private authorsService:AuthorsService, private router: Router) { }

  ngOnInit() {
    this.validationMessage = []
  }
  submit(name,quote){
    this.validationMessage = []
    this.authorsService.create({"name":name}).subscribe((data)=>{
      console.log(data['errors']);
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
