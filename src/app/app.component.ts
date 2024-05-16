import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieService } from './model/movieService';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { Movie } from './model/movie.model';
import { FormsModule } from '@angular/forms';
import { RestService } from './model/rest.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,  HttpClientModule,FormsModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MovieService, HttpClient,RestService]
})
export class AppComponent {
  constructor(private movieService: MovieService) {

  }
  get Movies():Movie[] {
    return this.movieService.getMovies()
  } 

}
