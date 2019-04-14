import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
<<<<<<< HEAD
  //variaveis publicas estaticas para consultas. 
=======
>>>>>>> 9ca621a13986ff2438e9455dd1289e5653825b21
  public static id_marca: String;
  public static id_ano: String;
  public static id_fipe: String;
  public static veiculo: String;
   constructor(private navCtrl: NavController) { }
<<<<<<< HEAD
    //O metordo listaMarcas recebe um dos atributos da home.page.html
    //carros, motos ou caminhoes
    listaMarcas(veiculo: String){
        //atribui a mensagem a variavel estatica para ser usada na requisição em fipe.service.ts
        HomePage.veiculo = veiculo;
        //redireciona para veiculos
=======
    listaMarcas(veiculo: String){
        HomePage.veiculo = veiculo;
>>>>>>> 9ca621a13986ff2438e9455dd1289e5653825b21
        this.navCtrl.navigateForward('veiculos');
    }
}