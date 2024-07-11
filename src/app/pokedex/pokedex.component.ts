import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from '../pokemon.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, PokemonCardComponent]
})
export class PokedexComponent implements OnInit {
  allPokemon: any[] = [];
  pokemon: any;
  pokemonName: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadAllPokemon();
  }

  loadAllPokemon() {
    for (let i = 1; i <= 151; i++) { 
      this.pokemonService.getPokemon(i.toString()).subscribe(
        (data: any) => {
          this.allPokemon.push(data);
        },
        (error: any) => {
          console.error('Error fetching Pokémon', error);
        }
      );
    }
  }

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
    const typeColors: { [key: string]: string } = {
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
    return typeColors[type] || '#777';
  }
}
