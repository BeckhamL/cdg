import { Component, OnInit } from '@angular/core';
import { TimelineModel } from '../timeline/timeline.model';
import { LanguageModel } from '../language-grid/language.model';
import { ProgrammingDifficultyModel, ExcerciseDifficultyEnum } from '../programming-difficulty/programming-difficulty.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  languages: LanguageModel[] = [
    {title: 'JavaScript', image: 'javascript.svg'},
    {title: 'C', image: 'c-language.svg'},
    {title: 'Java', image: 'java.svg'},
    {title: 'TypeScript', image: 'typescript.svg'},
    {title: 'Python', image: 'python.svg'}
  ];

  entries: TimelineModel[] = [
    {title: 'created', image: '../../assets/james-jebbia.jpg', description: 'Supreme is founded in New York city by James Jebbia', year: 1994},
    {title: 'created', image: '../../assets/travis-tee.jpg', description: 'Travis Bickle - First product Supreme released', year: 1994},
    {title: 'created', image: '../../assets/cherry.jpg', description: 'cherry, a skate film directed by William Strobeck featuring skaters such as Tyshawn Jones, Sage Elsesser', year: 2014}
  ];

  excercises: ProgrammingDifficultyModel[] = [
    {title: 'Hello World', difficulty: ExcerciseDifficultyEnum.easy, image: 'javascript.svg', timeToLearn: '5 minutes'},
    {title: 'For loops', difficulty: ExcerciseDifficultyEnum.easy, image: 'javascript.svg', timeToLearn: '5 minutes'},
    {title: 'FizzBuzz', difficulty: ExcerciseDifficultyEnum.medium, image: 'javascript.svg', timeToLearn: '10 minutes'},
  ]

  ngOnInit() {
  }

  getSelectedLanguage($event) {
    
  }

  getSelectedDifficulty($event) {
    console.log($event);
  }

}
