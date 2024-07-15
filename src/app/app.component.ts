import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './states/counter/counter.action';
import { selectCount } from './states/counter/counter.selector';
import { AppState } from './states/app.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-app';
  constructor(private store: Store<AppState>){}
  count1$ = this.store.select(selectCount);

  increament(){
    this.store.dispatch(increment());
  }
   decrement(){
    this.store.dispatch(decrement());
   }
   reset(){
    this.store.dispatch(reset());
   }
}
