import { Component, OnInit } from '@angular/core';
import { TimelineModel } from '../timeline/timeline.model';
import { LanguageModel } from '../language-grid/language.model';
import { ProgrammingDifficultyModel, ExcerciseDifficultyEnum } from '../programming-difficulty/programming-difficulty.model';
import { UserChoiceModel } from './userChoice.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  userSelectedOptions: UserChoiceModel;
  constructor() { 
    this.userSelectedOptions = new UserChoiceModel;
  }

  languages: LanguageModel[] = [
    {title: 'JavaScript', image: 'javascript.svg'},
    {title: 'C', image: 'c-language.svg'},
    {title: 'Java', image: 'java.svg'},
    {title: 'TypeScript', image: 'typescript.svg'},
    {title: 'Python', image: 'python.svg'}
  ];

  excercises: ProgrammingDifficultyModel[] = [
    {title: 'Hello World', difficulty: ExcerciseDifficultyEnum.easy, image: 'javascript.svg', timeToLearn: '5 minutes'},
    {title: 'For loops', difficulty: ExcerciseDifficultyEnum.easy, image: 'javascript.svg', timeToLearn: '5 minutes'},
    {title: 'FizzBuzz', difficulty: ExcerciseDifficultyEnum.medium, image: 'javascript.svg', timeToLearn: '10 minutes'},
  ]

  ngOnInit() {
  }

  getSelectedLanguage($event: LanguageModel) {
    this.userSelectedOptions.language = $event;
  }

  getSelectedDifficulty($event: ProgrammingDifficultyModel) {
    this.userSelectedOptions.difficulty = $event;
    console.log(this.userSelectedOptions);
  }

}
