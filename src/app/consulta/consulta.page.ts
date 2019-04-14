import { Component, OnInit } from '@angular/core';
import { FipeService } from '../services/fipe.service';
import { NavController } from '@ionic/angular';
import { AnosPage } from '../anos/anos.page';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {
<<<<<<< HEAD
  //codigo_consulta: any = [];
=======
  codigo_consulta: any = [];
>>>>>>> 9ca621a13986ff2438e9455dd1289e5653825b21
  consulta: any;

  constructor(private fipeService: FipeService, private navCtrl: NavController) {
    //this.veiculo = this.navParams.get();
    this.fipeService.getConsulta(HomePage.id_fipe).subscribe(
    resposta => {
      console.log(resposta);
      this.consulta = resposta;
<<<<<<< HEAD
=======
      this.codigo_consulta = Object.keys(resposta);
      console.log(this.codigo_consulta);
>>>>>>> 9ca621a13986ff2438e9455dd1289e5653825b21
    }
  );
  }

  ngOnInit() {
  }

}
