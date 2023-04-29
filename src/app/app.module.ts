import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokemonModule } from "./pokemon/pokemon.module";

/**
 *  un composant ne peux être definir dans plusieurs module pareil pour les directives et les pipes
 */

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    PokemonModule,
    AppRoutingModule, 
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
