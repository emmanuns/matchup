import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  post_ex = {
    tags: '#League of Legends',
    text: 'E aí pessoal, tava querendo jogar uma partidinha hoje mais tarde. Alguém topa?',
    user_photo: '../../assets/example_avatar.jpg',
    user_name: 'jcrodriguez'
  };
  constructor() {}

}
