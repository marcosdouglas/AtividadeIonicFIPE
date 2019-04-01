import { Component, OnInit } from '@angular/core';
import { FipeService } from '../services/fipe.service';
import { NavController } from '@ionic/angular';
import { VeiculosPage } from '../veiculos/veiculos.page';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.page.html',
  styleUrls: ['./modelos.page.scss'],
})
export class ModelosPage implements OnInit {
  //declara a variavel id_ano
  //public static id_ano: String;
  modelos : any = [];
  codigo_modelos: any;

  constructor(private fipeService: FipeService, private navCtrl: NavController) {
    //this.veiculo = this.navParams.get();
    this.fipeService.getModelos(HomePage.id_marca).subscribe(
    resposta => {
      console.log(resposta);
      this.modelos = resposta;
      this.codigo_modelos = Object.keys(resposta);
      console.log(this.codigo_modelos);
    }
  );
}

  //atribui a chave para a variavel id_ano e redireciona para a pagina anos
  listaAnos(id: String){
    HomePage.id_ano = id;
    this.navCtrl.navigateForward('anos');
    console.log(HomePage.id_ano);
  }

  ngOnInit() {
  }

}
