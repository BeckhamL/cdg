import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LanguageModel } from './language.model';

@Component({
  selector: 'app-language-grid',
  templateUrl: './language-grid.component.html',
  styleUrls: ['./language-grid.component.scss']
})
export class LanguageGridComponent implements OnInit {

  @Input()
  languages: LanguageModel[];

  @Output()
  selectedLanguage: EventEmitter<LanguageModel> = new EventEmitter<LanguageModel>();

  @Output()
  hoverLanguageInfo: EventEmitter<LanguageModel> = new EventEmitter<LanguageModel>();
  
  constructor() { }

  ngOnInit() {
  }

  onSelectLanguage($event: LanguageModel) {
    this.selectedLanguage.emit($event);
  }

  onHoverLanguage(language: LanguageModel) {
    this.hoverLanguageInfo.emit(language);
  }

}
