import { Component, OnInit } from '@angular/core';
import { FipeService } from '../services/fipe.service';
import { NavController } from '@ionic/angular';
<<<<<<< HEAD
=======
import { ModelosPage } from '../modelos/modelos.page';
>>>>>>> 9ca621a13986ff2438e9455dd1289e5653825b21
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-anos',
  templateUrl: './anos.page.html',
  styleUrls: ['./anos.page.scss'],
})
export class AnosPage implements OnInit {
<<<<<<< HEAD
  anos : any = [];
  allanos : any = [];
=======
  //public static id_fipe: String;
  anos : any = [];
>>>>>>> 9ca621a13986ff2438e9455dd1289e5653825b21
  codigo_anos: any;

  constructor(private fipeService: FipeService, private navCtrl: NavController) {
    //this.veiculo = this.navParams.get();
    this.fipeService.getAnos(HomePage.id_ano).subscribe(
    resposta => {
      console.log(resposta);
      this.anos = resposta;
<<<<<<< HEAD
      this.allanos = this.anos;
=======
>>>>>>> 9ca621a13986ff2438e9455dd1289e5653825b21
      this.codigo_anos = Object.keys(resposta);
      console.log(this.codigo_anos);
    }
  );
  }

  listaFipe(id: String){
    HomePage.id_fipe = id;
    this.navCtrl.navigateForward('consulta');
    console.log(HomePage.id_fipe);
  }

  ngOnInit() {
  }

<<<<<<< HEAD
  getItems(ev: any) {
    // Reset items back to all of the items
    this.anos = this.allanos;

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.anos = this.anos.filter((item) => {
        console.log(this.anos);
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

=======
>>>>>>> 9ca621a13986ff2438e9455dd1289e5653825b21
}
