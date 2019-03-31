import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FipeService {

  constructor(private httpClient: HttpClient) { }
    
  getMarcas(veiculo: String){
      return this.httpClient.get("http://fipeapi.appspot.com/api/1/"+veiculo+"/marcas.json");
  }
}
