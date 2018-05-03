import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-preview',
  templateUrl: './text-preview.component.html',
  styleUrls: ['./text-preview.component.css']
})
export class TextPreviewComponent implements OnInit {

  userMessage: string;
  classState: any = {
    bigText: false,
    comicFont: false,
    rainbowColored: false
  };

  constructor() { }

  ngOnInit() {
  }

  toggleSizeClass () {
    this.classState.bigText = !this.classState.bigText;
  }
  toggleFontClass () {
    this.classState.comicFont = !this.classState.comicFont;
  }
  toggleColorClass () {
    this.classState.rainbowColored = !this.classState.rainbowColored;
  }

}
