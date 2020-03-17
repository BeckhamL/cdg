import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgrammingDifficultyModel } from './programming-difficulty.model';
import { VanillaTiltSettings  } from 'angular-tilt';

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

  tiltSettings: VanillaTiltSettings = {
    glare: false
  };

  constructor() { }

  ngOnInit() {
  }

  onClickProgrammingDifficulty(excercise: ProgrammingDifficultyModel) {
    this.chosenExcercise.emit(excercise);
  }

}
