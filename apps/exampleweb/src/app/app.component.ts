import { Component } from '@angular/core';
@Component({
  selector: 'frontend-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Annotazioni', url: '/annotazioni', icon: 'archive' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Test','Test2'];
  constructor() {}
}
