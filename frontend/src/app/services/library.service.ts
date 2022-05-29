import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Automobil } from '../models/automobil';

@Injectable({
  providedIn: 'root'
})

export class LibraryServiceService    {
  
  constructor(private http:HttpClient) { }

  //DAJ SVE AUTOMOBILE
  dajAutomobile(): Observable<Automobil[]>
  {
      return this.http.get<Automobil[]>("http://localhost:5005/api/sviAutomobili");
  }

  //DAJ ODREDJENI AUTOMOBIL
  dajAutomobil(id:String): Observable<Automobil>
  {
    return this.http.get<Automobil>("http://localhost:5005/api/automobil/"+id);
  }

  //UNESI NOVI AUTOMOBIL
  unesiAutomobil(reqBody:Automobil): Observable<Automobil>
  {
    return this.http.post<Automobil>("http://localhost:5005/api/add", 
    {
      "brand": reqBody.brand,
      "model": reqBody.model,
      "godiste": reqBody.godiste,
      "grad": reqBody.grad,
      "kubikaza": reqBody.kubikaza,
      "kilometraza": reqBody.kilometraza,
      "registrovanDo": reqBody.registrovanDo,
      "boja" : reqBody.boja,
      "price":reqBody.price,
      "id": "a873b90f-5fca-4c41-a00e-8ea497cce542"
    });
  }

  //IZMENI AUTOMOBIL
  izmeniAutomobil(reqBody?:Automobil): Observable<Automobil>
  {
    return this.http.put<Automobil>("http://localhost:5005/api/update", 
    {
      "brand": reqBody?.brand,
      "model": reqBody?.model,
      "godiste": reqBody?.godiste,
      "grad": reqBody?.grad,
      "kubikaza": reqBody?.kubikaza,
      "kilometraza": reqBody?.kilometraza,
      "registrovanDo": reqBody?.registrovanDo,
      "boja" : reqBody?.boja,
      "price":reqBody?.price,
      "id":reqBody?.id
    });
  }

  //OBRISI AUTOMOBIL
  obrisiAutomobil(id:String): Observable<Boolean>
  {
    return this.http.delete<Boolean>("http://localhost:5005/api/brisanje/"+id);
  }
}