import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../Services/movie-data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  moviesList:any[]=this.movieService.moviesList
  constructor(private movieService:MovieDataService) { }

  ngOnInit(): void {
  }

}
