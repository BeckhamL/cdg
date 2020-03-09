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
    {title: 'created', image: '../../assets/james-jebbia.jpg', description: 'Supreme is founded in New York city by James Jebbia', year: '1994'},
    {title: 'created', image: '../../assets/travis-tee.jpg', description: 'Travis Bickle - First product Supreme released', year: '1994'}
  ] ;

  ngOnInit() {
  }

}
