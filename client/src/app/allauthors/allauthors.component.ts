import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-allauthors',
  templateUrl: './allauthors.component.html',
  styleUrls: ['./allauthors.component.css']
})
export class AllauthorsComponent implements OnInit {
  authors:Object[]
  message:string;

  constructor(private authorsService: AuthorsService) { }

  ngOnInit() {
    this.getAll()
  }
  getAll(){
    this.authorsService.getAll().subscribe(data=>this.authors = data['authors'])
  }
  delete(id){
    this.authorsService.delete(id).subscribe(data=>{
      this.getAll()
      this.message = `Removed ${data['name']}`
    })
  }

}
