import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http:HttpClient) { }
  create(data:{}){
    return this.http.post('/api/authors',data)
  }
  getAll(){
    return this.http.get('/api/authors')
  }
  delete(id){
    return this.http.delete('/api/authors/'+id)
  }
  getOne(id){
    return this.http.get('/api/authors/'+id)
  }
  update(id,data){
    console.log("entering update");
    return this.http.put('/api/authors/'+id,data)
  }
  createQuote(id,quote){
    console.log(id);
    return this.http.post('/api/quotes',{"id":id,"quote":quote})
  }
  deleteQuote(quoteid, authorid){
    console.log("authorid",authorid);
    console.log("quoteid",quoteid);
    return this.http.delete('/api/quotes/'+quoteid +"/"+authorid)
  }
  voteQuote(quoteid,authorid, num){
    return this.http.put('/api/quotes/'+quoteid+'/'+authorid,{"vote":num})
  }
}
