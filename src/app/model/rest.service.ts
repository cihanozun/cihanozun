import { Injectable } from "@angular/core";
import { Movie } from "./movie.model";
import { Observable } from "rxjs/internal/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class RestService{
    baseUrl: "http://localhost:3500/"

    constructor(private http: HttpClient) { }

    getMovies():Observable <Movie[]>{
       return this.http.get<Movie[]>("http://localhost:3500/movies")
       
    }
}