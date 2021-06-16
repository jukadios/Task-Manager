import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/tasks';
import { TasksService } from '../../services/tasks.service';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Tasks = {
    Token: this.serv.token,
    title: '',
    is_completed: '',
    // due_date: new Date,
    due_date: '',
    comments: '',
    description:'',
    tags:''
  };

  constructor(private serv: TasksService) {
    console.log(this.task.due_date);
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.task.title);
    console.log(this.task);
    this.serv.postTasks(this.task).subscribe(
      res => {
        console.log(res);
        Swal.fire({
          title: 'Se añadio Exitosamente el Producto',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        });
      },
      err => console.log(err)
    );
  }
}
