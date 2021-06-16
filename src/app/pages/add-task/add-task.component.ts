import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/tasks';
import { TasksService } from '../../services/tasks.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Tasks = {
    title: '',
    is_completed: '',
    // due_date: new Date,
    due_date: '',
    comments: '',
    description:'',
    tags:'',
    Token: this.serv.token,
  };

  constructor(private serv: TasksService) {}

  ngOnInit(): void {
  }

  val(){
    if (this.task.title == '' || this.task.is_completed == '' || this.task.due_date == ''){
      Swal.fire({
        title: 'One of the next spaces is empty:',
        text: 'Title, Is completed, Due date',
        icon: 'warning',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        showConfirmButton: false,
        timer: 3000
      });
    }else{
      this.save();
    }
  }

  save() {
    console.log(this.task);
    this.serv.postTasks(this.task).subscribe(
      res => {
        console.log(res);        
        Swal.fire({
          title: 'A new task was added',
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
      err => console.log(err)
    );
    this.clean();
  }

  clean(){
    this.task.title = '';
    this.task.is_completed = '';
    this.task.due_date = '';
    this.task.comments = '';
    this.task.description = '';
    this.task.tags = '';
  }
}
