import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular'

@Component({
  selector: 'page-xemhoa',
  templateUrl: 'xemhoa.html',
})
export class XemhoaPage implements OnInit {
  listHoa: any[] = [];
  constructor(public navCtrl: NavParams){}

  ngOnInit(){
    this.listHoa = this.navCtrl.data;
  }

}
