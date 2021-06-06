import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Rx";
import {Matiere} from "./matieres.interface";
import {map} from "rxjs/internal/operators";

@Injectable()
export class MatiereService {
  constructor(private http: HttpClient) { }

  getMatiere(): Observable<Matiere[]> {
    return  this.http.get<Matiere[]>(`/matieres`);
  }

  createMatiere(body:any): Observable<Matiere> {
    return this.http.post<Matiere>(`/matieres`, body);
  }

  deleteMatiere(id:any): Observable<number> {
    return this.http.post<Matiere>(`/matieres/delete`, {'id': id})
      .pipe(map(response => id));
  }
}