import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../Services/movie-data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

 
  moviesList:any[]=this.movieService.moviesList
  isClicked:boolean=false;
  movieObj:any;

  getMovie(movie:any)
  {
    this.isClicked=!this.isClicked;
    this.movieObj=movie;
    console.log(this.movieObj.title);
  }


  constructor(private movieService:MovieDataService) { }

  ngOnInit(): void {
  }

}
