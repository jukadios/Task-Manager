import { Component, OnInit } from '@angular/core';
// importar servicio de task y la interfaz
import { TasksService } from '../../services/tasks.service';
import { Tasks } from '../../models/tasks';
// imprtar el activated route pra recivir el id
import { ActivatedRoute } from '@angular/router';
// imprtacion de sweetalert2 para usar lo
import Swal from 'sweetalert2';

@Component({
  selector: 'app-see-task',
  templateUrl: './see-task.component.html',
  styleUrls: ['./see-task.component.css']
})
export class SeeTaskComponent implements OnInit {

  // variable para agarrar solo una parte de la fecha
  split: string[];

  // objeto de donde se guarda el task editado con la intefaz task
  task: Tasks = {
    id: 0,
    title: '',
    is_completed: '',
    due_date: '',
    comments: '',
    description:'',
    tags:'',
    token: this.serv.token,
  };

  // imporatcion del servicio y el router
  constructor(private serv: TasksService, private actRoute: ActivatedRoute) { 
    //se iguala el id del objeto al que manda la pagina de tasks 
    this.actRoute.params.subscribe(res => this.task.id = res.id);
    //Se obtiene la tarea con el id que tiene task
    this.getTask();
  }

  ngOnInit(): void {
  }

  // funcion para obtener el formato especifico de la fecha
  date(){
    // separa la fecha de la hora que viene con ella
    this.split = this.task.due_date.split(" ", 1);
    // se asigna solo la fecha al task due_date
    this.task.due_date = this.split[0];
  }

  // funcion edit
  edit() {
    // se le envia el id que necita mandar el put y el objeto que se edito
    this.serv.putTask(this.task.id, this.task).subscribe(res => {
      // sale una alerta con el mensaje de que se edito
      Swal.fire({
        title: `Task '${this.task.title}' was updated successfully`,
        icon: 'success',
        showConfirmButton: false,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        timer: 3000
      });
    },
    err => {
      console.log(err);
      // muestra un mensaje con el error que hay
      Swal.fire({
        title: `Something went wrong ${err}`,
        icon: 'error',
        showConfirmButton: false,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        timer: 3000
      });
    });
  }

  // funcion para traer el objeto con el id que se pide
  getTask() {
    // se manda la peticion get con el id que se requiere
    this.serv.getTask(this.task.id).subscribe(res => {
      // se iguala el task con el objeto que se obtiene
      this.task = res[0];
      // se usa la funcion de date para dar el formato requerido 
      this.date();
    });
  }
}
