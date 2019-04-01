import { Component, OnInit } from '@angular/core';
import { FipeService } from '../services/fipe.service';
import { NavController } from '@ionic/angular';
import { ModelosPage } from '../modelos/modelos.page';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-anos',
  templateUrl: './anos.page.html',
  styleUrls: ['./anos.page.scss'],
})
export class AnosPage implements OnInit {
  //public static id_fipe: String;
  anos : any = [];
  codigo_anos: any;

  constructor(private fipeService: FipeService, private navCtrl: NavController) {
    //this.veiculo = this.navParams.get();
    this.fipeService.getAnos(HomePage.id_ano).subscribe(
    resposta => {
      console.log(resposta);
      this.anos = resposta;
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

}
