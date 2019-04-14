import { Component, OnInit } from '@angular/core';
import { FipeService } from '../services/fipe.service';
import { NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-anos',
  templateUrl: './anos.page.html',
  styleUrls: ['./anos.page.scss'],
})
export class AnosPage implements OnInit {
  anos : any = [];
  allanos : any = [];
  codigo_anos: any;

  constructor(private fipeService: FipeService, private navCtrl: NavController) {
    //this.veiculo = this.navParams.get();
    this.fipeService.getAnos(HomePage.id_ano).subscribe(
    resposta => {
      console.log(resposta);
      this.anos = resposta;
      this.allanos = this.anos;
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

}
