import { Component, OnInit } from '@angular/core';
// se importa el router para mandar el id del elemento que se va a editar
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
// se improta para usar sweetalert2
import Swal from 'sweetalert2';
// se importa la inerfaz de task
import { Tasks } from '../../models/tasks';

@Component({
  selector: 'app-see-tasks',
  templateUrl: './see-tasks.component.html',
  styleUrls: ['./see-tasks.component.css']
})
export class SeeTasksComponent implements OnInit {

  // array par aguardar todas las tareas
  tasks: Tasks[] = [];

  // se importan los servicios y el router
  constructor(private serv: TasksService, private router: Router) {
    // se llama a get task
    this.getTasks();
   }

  ngOnInit(): void {
  }

  // consigue las tareas de la base de datos
  getTasks(){
    // usa el servicio get para traer todas las tareas
    this.serv.getTasks().subscribe(res => {
      // iguala el array tasks al array que hay de tareas en la base de datos
      this.tasks = res;
      // pone la fecha en el formato deseado
      this.tasks.forEach(element => {
        // se usara para almacenar el dato de fecha
        let split;
        // se usa split de la fecha para solo obtener la fecha sin la hora
        split = element.due_date.split(" ", 1);
        // se iguala la fecha al split 
        element.due_date = split;
      });
    });
  }

  // funcion para mandar el id a la pestaña de editar
  viewTask(id: number) {
    // se manda el id a la pestaña de editar
    this.router.navigate(['/see', id]);
  }

  // funcion para eliminar la tarea
  delTask(task: Tasks){
    // mensaje para asgurar la eliminacion de la tarea
    Swal.fire({
      title: 'Are you sure you want to delete the task:',
      text: `${task.title}`,
      icon: 'warning',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      // muestra boones de aceptar y cancelar
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete Task',
      cancelButtonText: `Don't Delete Task` 
    }).then(result => {
      // despues se trae la seleccion y si es confirmada
      if (result.isConfirmed) {
          // llama el servicio para eliminar y se subcrive 
          this.serv.delTask(task.id).subscribe(res => {
            // aprece una alerta de que se elimino la tarea con el id correspondiente
            Swal.fire(
              `The task ${task.title} was deleted successfully`,
              '',
              'success'
            )
            //llama la funcion get que hace un refresh de las tareas para que ya no aparezcan las tareas eliminadas
            this.getTasks();
          },
          err => {
            // mensaje si hay un error cuando se manda el metodo delete
            console.log("Error", err);
            Swal.fire(
              `Something went wrong`,
              '',
              'error'
            )
          });
        }else{
          // aparece el mensaje de que no se elimino la tarea
          Swal.fire(
            `The task ${task.title} wasn't deleted`,
            '',
            'success'
          )
        }
      });
    };

}
