import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import Swal from 'sweetalert2';
import { Tasks } from '../../models/tasks';

@Component({
  selector: 'app-see-tasks',
  templateUrl: './see-tasks.component.html',
  styleUrls: ['./see-tasks.component.css']
})
export class SeeTasksComponent implements OnInit {

  tasks: Tasks[] = [];

  constructor(private serv: TasksService, private router: Router) {
    this.getTasks();
   }

  ngOnInit(): void {
  }

  getTasks(){
    this.serv.getTasks().subscribe(res => {
      this.tasks = res;
      this.tasks.forEach(element => {
        let split;
        split = element.due_date.split(" ", 1);
        element.due_date = split;
      });
    });
  }

  viewTask(id: number) {
    this.router.navigate(['/see', id]);
  }

  delTask(task: Tasks){
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
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete Task',
      cancelButtonText: `Don't Delete Task` 
    }).then(result => {
      if (result.isConfirmed) {
          this.serv.delTask(task.id).subscribe(res => {
            console.log(res);
            Swal.fire(
              `The task ${task.title} was deleted successfully`,
              '',
              'success'
            )
            this.getTasks();
          },
          err => {
            console.log("Error", err);
            Swal.fire(
              `Something went wrong`,
              '',
              'error'
            )
          });
        }else{
          Swal.fire(
            `The task ${task.title} wasn't deleted`,
            '',
            'success'
          )
        }
      });
    };

}
