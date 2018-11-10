import { Component, OnInit } from '@angular/core';
import { AutService } from '../core/aut.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSrv:AutService, private router:Router) { }

  ngOnInit() {
  }

  async login(){
    try{
      await this.authSrv.login();
      this.router.navigate(['/home']);

    }catch(err){
      console.error('errore login ',err)
    }
  }

}
