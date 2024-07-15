import { AppModule } from "src/app/app.module";
import { AppState } from "../app.state";
import { createSelector } from "@ngrx/store";


export const selectCounterState = (state: AppState) => {
    return state.counter;
  };
export const selectCount = createSelector(
    selectCounterState,
    (countState)=>{
        return countState.count;
    }
    )
   
      