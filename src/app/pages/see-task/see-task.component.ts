import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Tasks } from '../../models/tasks';
import { ActivatedRoute } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-see-task',
  templateUrl: './see-task.component.html',
  styleUrls: ['./see-task.component.css']
})
export class SeeTaskComponent implements OnInit {

  split: string[];

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

  constructor(private serv: TasksService, private actRoute: ActivatedRoute) { 
    this.actRoute.params.subscribe(res => this.task.id = res.id);
    this.getTask();
  }

  ngOnInit(): void {
  }

  date(){
    this.split = this.task.due_date.split(" ", 1);
    this.task.due_date = this.split[0];
  }

  edit() {
    console.log(this.task);
    this.serv.putTask(this.task.id, this.task).subscribe(res => {
      console.log(res);
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

  getTask() {
    this.serv.getTask(this.task.id).subscribe(res => {
      this.task = res[0];
      this.date();
    });
  }
}
