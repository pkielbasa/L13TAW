import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";
@Component({
  selector: 'blog-add-post',
  templateUrl: './blog-add-post.component.html',
  styleUrls: ['./blog-add-post.component.css']
})
export class BlogAddPostComponent implements OnInit {

  public post = {
    title: '',
    image: '',
    text: '',
  };



  constructor(public dataService: DataService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addPost() {
    return this.dataService.addPost(this.post).subscribe((result) => {
      if(!result){

      }else{
        this.post = {
          title: '',
          image: '',
          text: '',
        };
      }

    });
  }

}
