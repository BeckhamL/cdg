import { Component, OnInit, Input } from '@angular/core';
import { ProgrammingDifficultyModel } from './programming-difficulty.model';

@Component({
  selector: 'app-programming-difficulty',
  templateUrl: './programming-difficulty.component.html',
  styleUrls: ['./programming-difficulty.component.scss']
})
export class ProgrammingDifficultyComponent implements OnInit {

  @Input()
  excercises: ProgrammingDifficultyModel[];
  
  constructor() { }

  ngOnInit() {
  }

}
