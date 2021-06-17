import { Component, OnInit } from '@angular/core';
// se importa la intefaz de tasks junto con el servicio
import { Tasks } from 'src/app/models/tasks';
import { TasksService } from '../../services/tasks.service';
// Se importa para usar sweetalert2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  // objeto para guardar los datos del form
  task: Tasks = {
    title: '',
    is_completed: '',
    due_date: '',
    comments: '',
    description:'',
    tags:'',
    token: this.serv.token,
  };

  // declarar el servicio para poder usar el CRUD
  constructor(private serv: TasksService) {}

  ngOnInit(): void {
  }

  // funcion de validacion
  val(){
    // Checa que los campos de  titulo, is completed o fecha no esten vacios
    if (this.task.title == '' || this.task.is_completed == '' || this.task.due_date == ''){
      // en caso de estar vaico alguno de los campos saldra una alerta
      Swal.fire({
        title: 'One of the next spaces is empty:',
        text: 'Title, Is completed, Due date',
        icon: 'warning',
        // animaciones para cuando aparece la alerta
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        // no se muestran botones
        showConfirmButton: false,
        // tiempo que dura el mensaje de alerta
        timer: 3000
      });
    }else{
      // si todo esta bien se llama al metodo de guardar
      this.save();
    }
  }

  // Funcion guardar
  save() {
    // Se usa el servicio post del servicio task
    this.serv.postTasks(this.task).subscribe(
      res => {
        console.log(res);
        // dispara la alerta si se añadio bien
        Swal.fire({
          title: 'A new task was added',
          icon: 'success',
          showConfirmButton: false,
          // animaciones para cuando aparece la alerta
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          // tiempo que dura el mensaje de alerta
          timer: 1000
        });
      },
      err =>{
        // se muestra una alerta de error 
        console.log("Error", err);
        Swal.fire({
          title: 'Somthing went wrong',
          icon: 'error',
          showConfirmButton: false,
          // animaciones para cuando aparece la alerta
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          // tiempo que dura el mensaje de alerta
          timer: 1000
        });
      } 
    );
    // limpia los campos despues de hacer la peticion post
    this.clean();
  }

  //Limpia los campos  
  clean(){
    this.task.title = '';
    this.task.is_completed = '';
    this.task.due_date = '';
    this.task.comments = '';
    this.task.description = '';
    this.task.tags = '';
  }
}
