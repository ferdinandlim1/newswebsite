import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

  sportsnewsDisplay:any = [];

  ngOnInit(): void {

    this._services.sportsNews().subscribe((result)=>{
      this.sportsnewsDisplay = result.articles;
    })
  }

}
