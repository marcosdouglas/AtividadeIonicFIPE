import { Component, OnInit } from '@angular/core';
import { FipeService } from '../services/fipe.service';
import { NavController } from '@ionic/angular';
<<<<<<< HEAD
=======
import { VeiculosPage } from '../veiculos/veiculos.page';
>>>>>>> 9ca621a13986ff2438e9455dd1289e5653825b21
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.page.html',
  styleUrls: ['./modelos.page.scss'],
})
export class ModelosPage implements OnInit {
<<<<<<< HEAD
  modelos : any = [];
  allmodelos : any = [];
=======
  //declara a variavel id_ano
  //public static id_ano: String;
  modelos : any = [];
>>>>>>> 9ca621a13986ff2438e9455dd1289e5653825b21
  codigo_modelos: any;

  constructor(private fipeService: FipeService, private navCtrl: NavController) {
    //this.veiculo = this.navParams.get();
    this.fipeService.getModelos(HomePage.id_marca).subscribe(
    resposta => {
      console.log(resposta);
      this.modelos = resposta;
<<<<<<< HEAD
      this.allmodelos = this.modelos;
=======
>>>>>>> 9ca621a13986ff2438e9455dd1289e5653825b21
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

<<<<<<< HEAD
  getItems(ev: any) {
    // Reset items back to all of the items
    this.modelos = this.allmodelos;

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.modelos = this.modelos.filter((item) => {
        console.log(this.modelos);
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
=======
>>>>>>> 9ca621a13986ff2438e9455dd1289e5653825b21
}
