import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //Esta varibale dice cuando la navbar esta activa o inactiva
  sideBar = false;

  constructor() { }

  ngOnInit(): void {
  }

  //Esta funcion es para hacer la transicion de la navbar lateral
  toggleSideBar() {

    if(this.sideBar === true){
      //Se selecciona el elemento llamado sidebar y add es para mostrar la navbar
      document.getElementsByClassName('sidebar')[0].classList.add('showsidebar');
      this.sideBar = false;
    }
    else if(this.sideBar === false){
      //Se selecciona el elemento llamado sidebar y remove es para ocultar la navbar
      document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
      this.sideBar = true;
    }  
  }

}
