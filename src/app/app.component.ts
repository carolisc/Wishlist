import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
addNewWish() {
throw new Error('Method not implemented.');
}
  items : WishItem[] = [ // o any (agr WIshItem) é pra ele não fechar em itens igual tinha antes >new WishItem("xxx") --------------- é uma array pq tem [] depois do nome
    new WishItem('To Learn Angular'),
    new WishItem('To Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];

  newWishText = '';

  title = 'wishlist';

  addNewWish() {
    // todo: add the wish to the items array
    // clear the textbox
  }

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  };
}
