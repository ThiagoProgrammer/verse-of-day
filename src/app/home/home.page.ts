import { VerseService } from './../services/verse.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public verse;
  constructor(private verseService: VerseService) {}

  ngOnInit() {
    this.getRandomVerse();
  }

 async getRandomVerse() {
    this.verse = await this.verseService.getRandomVerse().toPromise();
  }

}
