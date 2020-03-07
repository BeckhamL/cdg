import { Component, OnInit, Input } from '@angular/core';
import { TimelineModel } from './timeline.model';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input()
  timelineEntries: TimelineModel[];

  constructor() { }

  ngOnInit() {
  }

}
