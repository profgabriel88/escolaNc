import { Component, ComponentRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private loginService: LoginServiceService,
    private router: Router
    ) { }

  ngOnInit() {
    // if(this.loginService.usuarioLogado() === null || this.loginService.usuarioLogado === undefined){
    //   this.router.navigate(['/']);
    // }
  }

}
