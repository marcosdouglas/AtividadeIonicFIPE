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
  //codigo_consulta: any = [];
  consulta: any;

  constructor(private fipeService: FipeService, private navCtrl: NavController) {
    //this.veiculo = this.navParams.get();
    this.fipeService.getConsulta(HomePage.id_fipe).subscribe(
    resposta => {
      console.log(resposta);
      this.consulta = resposta;
    }
  );
  }

  ngOnInit() {
  }

}
