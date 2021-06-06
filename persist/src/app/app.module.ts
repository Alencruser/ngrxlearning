import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {appEffects, getReducers, REDUCER_TOKEN} from "./index";
import { MatieresComponent } from './matieres.component';
import { AjoutMatiereComponent } from './ajout-matieres.component';

@NgModule({
  declarations: [
    AppComponent,
    MatieresComponent,
    AjoutMatiereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      name: '[DEMOANGULAR]',
      maxAge: 25, // Retains last 25 states
      logOnly: false // Restrict extension to log-only mode
    }),
  ],
  providers: [{
    provide: REDUCER_TOKEN,
    useFactory: getReducers
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
