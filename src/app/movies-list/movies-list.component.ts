import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  moviesList=[
    {
      "_id": "5b21ca3eeb7f6fbccd471815",
      "title": "Terminator",
      "genre": { "_id": "5b21ca3eeb7f6fbccd471818", "name": "Action" },
      "numberInStock": 6,
      "dailyRentalRate": 2.5,
      "movieImg":"https://m.media-amazon.com/images/I/A1wiVBc2VLL._SL1500_.jpg"
    },
    {
      "_id": "5b21ca3eeb7f6fbccd471816",
      "title": "Die Hard",
      "genre": { "_id": "5b21ca3eeb7f6fbccd471818", "name": "Action" },
      "numberInStock": 5,
      "dailyRentalRate": 2.5,
      "movieImg":"https://upload.wikimedia.org/wikipedia/en/7/7e/Die_hard.jpg"
    },
    {
      "_id": "5b21ca3eeb7f6fbccd471817",
      "title": "Get Out",
      "genre": { "_id": "5b21ca3eeb7f6fbccd471820", "name": "Thriller" },
      "numberInStock": 8,
      "dailyRentalRate": 3.5,
      "movieImg":"https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg"
    },
    {
      "_id": "5b21ca3eeb7f6fbccd471819",
      "title": "Trip to Italy",
      "genre": { "_id": "5b21ca3eeb7f6fbccd471814", "name": "Comedy" },
      "numberInStock": 7,
      "dailyRentalRate": 3.5,
      "movieImg":"https://i5.walmartimages.com/asr/15884701-5ff4-4b0a-a826-f5ea929b17c5_1.01fc2c3cbe34db9766b18be6a1224119.jpeg"
    },
    {
      "_id": "5b21ca3eeb7f6fbccd47181a",
      "title": "Airplane",
      "genre": { "_id": "5b21ca3eeb7f6fbccd471814", "name": "Comedy" },
      "numberInStock": 7,
      "dailyRentalRate": 3.5,
      "movieImg":"https://flxt.tmsimg.com/assets/p1671_p_v10_aa.jpg"
    },
    {
      "_id": "5b21ca3eeb7f6fbccd47181b",
      "title": "Wedding Crashers",
      "genre": { "_id": "5b21ca3eeb7f6fbccd471814", "name": "Comedy" },
      "numberInStock": 7,
      "dailyRentalRate": 3.5,
      "movieImg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvDxoXqton8vV3A8IcaeMpyCaig_BJr9SPyOOiDVCDqpq5-HWeEXkRBLMEHdInbyx5Xw&usqp=CAU"
    },
    {
      "_id": "5b21ca3eeb7f6fbccd47181e",
      "title": "Gone Girl",
      "genre": { "_id": "5b21ca3eeb7f6fbccd471820", "name": "Thriller" },
      "numberInStock": 7,
      "dailyRentalRate": 4.5,
      "movieImg":"https://www.literarytraveler.com/wp-content/uploads/2015/01/Gone-Girl1.jpg"
    },
    {
      "_id": "5b21ca3eeb7f6fbccd47181f",
      "title": "The Sixth Sense",
      "genre": { "_id": "5b21ca3eeb7f6fbccd471820", "name": "Thriller" },
      "numberInStock": 4,
      "dailyRentalRate": 3.5,
      "movieImg":"https://flxt.tmsimg.com/assets/p23611_p_v10_ag.jpg"
    },
    {
      "_id": "5b21ca3eeb7f6fbccd471821",
      "title": "The Avengers",
      "genre": { "_id": "5b21ca3eeb7f6fbccd471818", "name": "Action" },
      "numberInStock": 7,
      "dailyRentalRate": 3.5,
      "movieImg":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
