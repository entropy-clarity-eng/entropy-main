import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-collect-thought',
  templateUrl: './collect-thought.component.html',
  styleUrls: ['./collect-thought.component.sass']
})
export class CollectThoughtComponent implements OnInit {

  thoughtText:string="";

  constructor(titleService:Title) { 
    titleService.setTitle("Entropy - Collect Thoughts")
  }

  ngOnInit() {
  }

}
