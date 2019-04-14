import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //variaveis publicas estaticas para consultas. 
  public static id_marca: String;
  public static id_ano: String;
  public static id_fipe: String;
  public static veiculo: String;
   constructor(private navCtrl: NavController) { }
    //O metordo listaMarcas recebe um dos atributos da home.page.html
    //carros, motos ou caminhoes
    listaMarcas(veiculo: String){
        //atribui a mensagem a variavel estatica para ser usada na requisição em fipe.service.ts
        HomePage.veiculo = veiculo;
        //redireciona para veiculos
        this.navCtrl.navigateForward('veiculos');
    }
}