import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgrammingDifficultyModel } from './programming-difficulty.model';

@Component({
  selector: 'app-programming-difficulty',
  templateUrl: './programming-difficulty.component.html',
  styleUrls: ['./programming-difficulty.component.scss']
})
export class ProgrammingDifficultyComponent implements OnInit {

  @Input()
  excercises: ProgrammingDifficultyModel[];

  @Output()
  chosenExcercise: EventEmitter<ProgrammingDifficultyModel> = new EventEmitter<ProgrammingDifficultyModel>();

  constructor() { }

  ngOnInit() {
  }

  onClickProgrammingDifficulty(excercise: ProgrammingDifficultyModel) {
    this.chosenExcercise.emit(excercise);
  }

}
