import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, PokedexComponent, PokemonCardComponent]
})
export class AppComponent {
  title = 'pokemon-app';
  view: string = 'search';  // Default view

  setView(view: string) {
    this.view = view;
  }
}
