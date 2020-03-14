import { Component, OnInit, Input } from '@angular/core';
import { UserChoiceModel } from '../main/userChoice.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input()
  timelineEntries: UserChoiceModel;

  constructor() { }

  ngOnInit() {
  }

}
