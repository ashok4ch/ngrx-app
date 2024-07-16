import { Injectable } from "@angular/core";
import {Actions,ofType,createEffect} from '@ngrx/effects';
import { decrement, increment, reset } from "./counter.action";
import { tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";

@Injectable()
export class CounterEffects{
    logActions$= createEffect(()=>this.actions$.pipe( 
        ofType(increment,decrement,reset),
        tap(action =>{
            console.log("Action dispatched:",action)
            if(action.type=='[Counter Component] Increment'){
               //window.setTimeout(()=>{this.store.dispatch(reset())} , 3000);
            }
        })
        ),
         {dispatch:false});
         constructor(private actions$:Actions, private store: Store<AppState>){}
        
}