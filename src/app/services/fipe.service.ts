import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home.page';
import { VeiculosPage } from '../veiculos/veiculos.page';
import { ModelosPage } from '../modelos/modelos.page';

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
  getAnos(id:String){
    return this.httpClient.get("http://fipeapi.appspot.com/api/1/"+HomePage.veiculo+"/veiculo/"+HomePage.id_marca+"/"+id+".json");
  }
  getConsulta(id: String){
    return this.httpClient.get("http://fipeapi.appspot.com/api/1/"+HomePage.veiculo+"/veiculo/"+HomePage.id_marca+"/"+HomePage.id_ano+"/"+id+".json");
  }
}
