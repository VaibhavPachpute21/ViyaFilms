import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor() { }
  video:any;
  videoDetails=[
    {id:1,url:"https://www.youtube.com/embed/lXoNNJ7Xna4?autoplay=1&mute=1"},
    {id:2,url:"https://www.youtube.com/embed/lXoNNJ7Xna4?autoplay=1&mute=1"},
    {id:3,url:"https://www.youtube.com/embed/lXoNNJ7Xna4?autoplay=1&mute=1"},
    {id:4,url:"https://www.youtube.com/embed/lXoNNJ7Xna4?autoplay=1&mute=1"},
  ]
  ngOnInit(): void {
    this.video=this.videoDetails;
  }

}
