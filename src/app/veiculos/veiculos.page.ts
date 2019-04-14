import { Component, OnInit } from '@angular/core';
import { FipeService } from '../services/fipe.service';
import { HomePage } from '../home/home.page';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.page.html',
  styleUrls: ['./veiculos.page.scss'],
})
export class VeiculosPage implements OnInit {
<<<<<<< HEAD
    codigo_marcas: any = [];
    allcodigo_marcas: any = [];
    marcas: any;
    Allmarcas: any;
=======
    //declara uma variavel estatica para id da marca do veiculo
    //public static id_marca: String;
    codigo_marcas: any = [];
    marcas: any;
>>>>>>> 9ca621a13986ff2438e9455dd1289e5653825b21
 
    
  constructor(private fipeService: FipeService, private navCtrl: NavController) {
      this.fipeService.getMarcas(HomePage.veiculo).subscribe(
      resposta => {
        console.log(resposta);
        this.marcas = resposta;
<<<<<<< HEAD
        this.Allmarcas = this.marcas;
=======
>>>>>>> 9ca621a13986ff2438e9455dd1289e5653825b21
        this.codigo_marcas = Object.keys(resposta);
        console.log(this.codigo_marcas);

      }
    );
  }
  //atribui a chave para a variavel id_marca e redireciona para a pagina modelos
  listaModelo(id: String){
    HomePage.id_marca = id;
    this.navCtrl.navigateForward('modelos');
    console.log(id);
  }

  ngOnInit() {
  }

<<<<<<< HEAD
  getItems(ev: any) {
    // Reset items back to all of the items
    this.marcas = this.Allmarcas;

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.marcas = this.marcas.filter((item) => {
        console.log(this.marcas);
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

=======
}
>>>>>>> 9ca621a13986ff2438e9455dd1289e5653825b21
