import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  providers: [PokemonService]
})
export class PokemonCardComponent {
  pokemon: any;
  pokemonName: string = '';

  typeColors: { [key: string]: string } = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
  };

  constructor(private pokemonService: PokemonService) {}

  searchPokemon() {
    this.pokemonService.getPokemon(this.pokemonName.toLowerCase()).subscribe(
      (data: any) => {
        this.pokemon = data;
      },
      (error: any) => {
        console.error('Error fetching Pokémon', error);
      }
    );
  }

  getTypeColor(type: string): string {
    return this.typeColors[type] || '#777';  // Default color if type not found
  }
}
