import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  @Input() getObj:any;
  @Input() getClick:boolean=false;

  clickMe()
  {
    console.log(this.getObj.title)
  }

  ngOnInit(): void {
  }

}
