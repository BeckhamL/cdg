import { Component, OnInit } from '@angular/core';
import { TimelineModel } from '../timeline/timeline.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  entries: TimelineModel[] = [
    {title: 'created', image: '', description: 'this is desc', year: '1992'},
    {title: 'created', image: '', description: 'this is desc', year: '1993'}
  ] ;

  ngOnInit() {
  }

}
