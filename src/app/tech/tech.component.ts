import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

  technewsDisplay:any = [];

  ngOnInit(): void {

    this._services.techNews().subscribe((result)=>{
      this.technewsDisplay = result.articles;
    })
  }

}
