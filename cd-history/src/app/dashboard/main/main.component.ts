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
  hoveredLanguage: LanguageModel;

  languages: LanguageModel[] = [
    {title: 'JavaScript', image: 'javascript.svg', hoverDescription: 'an object oriented programming language used commonly for the web', dialect: '/ˈjävəskript,ˈjavə-/'},
    {title: 'C', image: 'c-language.svg',hoverDescription: 'an imperative programming language developed for system programming', dialect: 'c'},
    {title: 'Java', image: 'java.svg', hoverDescription: 'an object oriented and class based programming language', dialect: '/ˈjävə,ˈjavə/'},
    {title: 'TypeScript', image: 'typescript.svg', hoverDescription: 'an object oriented programming language that transcompiles to JavaScript', dialect: '/ˈtīpˌskript/'},
    {title: 'Python', image: 'python.svg', hoverDescription: 'eg', dialect: '/ˈpīˌTHän,ˈpīTHən/'}
  ];

  excercises: ProgrammingDifficultyModel[] = [
    {title: 'Hello World', difficulty: ExcerciseDifficultyEnum.easy, image: 'javascript.svg', timeToLearn: '5 minutes'},
    {title: 'For loops', difficulty: ExcerciseDifficultyEnum.easy, image: 'javascript.svg', timeToLearn: '5 minutes'},
    {title: 'FizzBuzz', difficulty: ExcerciseDifficultyEnum.medium, image: 'javascript.svg', timeToLearn: '10 minutes'},
  ];

  fakeData: TimelineModel = {
    steps: [
      {title: 'Getting started', description: 'blag blag blag', image: 'javascript.svg'},
      {title: 'Getting started', description: 'blag blag blag', image: 'javascript.svg'},
      {title: 'Getting started', description: 'blag blag blag', image: 'javascript.svg'}
    ]
  };

  constructor() { 
    this.userSelectedOptions = new UserChoiceModel;
  }

  ngOnInit() {
  }

  getSelectedLanguage($event: LanguageModel, target: HTMLElement) {
    this.userSelectedOptions.language = $event;
    target.scrollIntoView({behavior: 'smooth'});
  }

  getSelectedDifficulty($event: ProgrammingDifficultyModel, target: HTMLElement) {
    this.userSelectedOptions.difficulty = $event;
    target.scrollIntoView({behavior: 'smooth'});
  }

  getHoverLanguage($event: LanguageModel) {
    this.hoveredLanguage = $event;
  }

}
