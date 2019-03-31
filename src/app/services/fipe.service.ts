import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home.page';

@Injectable({
  providedIn: 'root'
})
export class FipeService {

  constructor(private httpClient: HttpClient) { }
    
  getMarcas(veiculo: String){
      return this.httpClient.get("http://fipeapi.appspot.com/api/1/"+veiculo+"/marcas.json");
  }
  getModelos(id: String){
    return this.httpClient.get("http://fipeapi.appspot.com/api/1/"+HomePage.veiculo+"/veiculos/"+id+".json");
  }
}
