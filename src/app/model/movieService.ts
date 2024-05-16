import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "./movie.model";
import { RestService } from "./rest.service";


@Injectable()
export class MovieService implements OnInit {
  private movie: Movie[] = [];

  constructor(private restService: RestService) {
    this.restService.getMovies().subscribe(e => this.movie = e)
  }
  ngOnInit(): void {
  }
  getMovies(): Movie[] {
    return this.movie;
  }
}
