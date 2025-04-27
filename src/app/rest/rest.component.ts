import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent {

  posts :any
  constructor(http :HttpClient) {
    //  let response = http.get('https://jsonplaceholder.typicode.com/posts');
    //  let response = http.get('https://88.24.29.240/api/Account/Users');
    let response = http.get('https://localhost:4200/api/Account/Users')
     response.subscribe((data)=>this.posts=data);
  }
}