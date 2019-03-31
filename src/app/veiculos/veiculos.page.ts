import { Component, OnInit } from '@angular/core';
//import { NavParams } from '@ionic/angular';
import { FipeService } from '../services/fipe.service';
import { HomePageModule } from '../home/home.module';
import { HomePage } from '../home/home.page';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.page.html',
  styleUrls: ['./veiculos.page.scss'],
})
export class VeiculosPage implements OnInit {
   codigo_marcas: any = [];
    marcas: any;
    veiculo: any;
    //declara uma variavel estatica para id da marca do veiculo
    public static id_marca: String; 
    
  constructor(private fipeService: FipeService, private navCtrl: NavController) {
      //this.veiculo = this.navParams.get();
      this.fipeService.getMarcas(HomePage.veiculo).subscribe(
      resposta => {
        console.log(resposta);
        this.marcas = resposta;
        this.codigo_marcas = Object.keys(resposta);
        console.log(this.codigo_marcas);

      }
    );
  }
  //atribui a chave para a variavel id_marca e redireciona para a pagina modelos
  listaModelo(id: String){
    VeiculosPage.id_marca = id;
    this.navCtrl.navigateForward('modelos');
    console.log(id);
  }

  ngOnInit() {
  }

}
