import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public static id_marca: String;
  public static id_ano: String;
  public static id_fipe: String;
  public static veiculo: String;
   constructor(private navCtrl: NavController) { }
    listaMarcas(veiculo: String){
        HomePage.veiculo = veiculo;
        this.navCtrl.navigateForward('veiculos');
    }
}