import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  contact=
    {
      name:'ahmed',
      email:'dahman.ahmed93@gmail.com',
      photo:'C:\Users\Lenovo\Pictures\Screenshots\Capture d’écran (1).png'
    }
  

  constructor(public navCtrl: NavController) { }
  
  BackToHome(){
    this.navCtrl.navigateForward("/home");
  }

  

  ngOnInit() {
  }

}
