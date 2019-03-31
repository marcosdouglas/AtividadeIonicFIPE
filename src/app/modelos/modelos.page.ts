import { Component, OnInit } from '@angular/core';
import { FipeService } from '../services/fipe.service';
import { NavController } from '@ionic/angular';
import { VeiculosPage } from '../veiculos/veiculos.page';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.page.html',
  styleUrls: ['./modelos.page.scss'],
})
export class ModelosPage implements OnInit {

  modelos : any = [];
  codigo_modelos: any;

  constructor(private fipeService: FipeService, private navCtrl: NavController) {
    //this.veiculo = this.navParams.get();
    this.fipeService.getModelos(VeiculosPage.id_marca).subscribe(
    resposta => {
      console.log(resposta);
      this.modelos = resposta;
      this.codigo_modelos = Object.keys(resposta);
      console.log(this.codigo_modelos);

    }
  );
}

  ngOnInit() {
  }

}
