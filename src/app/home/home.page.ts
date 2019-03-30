import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//    constructor(private navCtrl: NavController) { //}
    
    listaCarros(){
//        this.navCtrl.push('veiculos', {
//    veiculo: 'carros'
//});

    }
    
    listaMotos(){
//        this.navCtrl.push('veiculos', {
//    veiculo: 'Motos'
//});
        //this.navCtrl.navigateForward('veiculos');
    }
    
        listaCaminhoes(){
//        this.navCtrl.push('veiculos', {
//    veiculo: 'Caminhoes'
//});
        //this.navCtrl.navigateForward('veiculos');
    }
}
