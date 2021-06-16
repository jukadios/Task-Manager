import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Tasks } from '../../models/tasks';

@Component({
  selector: 'app-see-tasks',
  templateUrl: './see-tasks.component.html',
  styleUrls: ['./see-tasks.component.css']
})
export class SeeTasksComponent implements OnInit {

  tasks: Tasks[] = [];

  constructor(private serv: TasksService) {
    this.serv.getTasks().subscribe(res => console.log(res));
   }

  ngOnInit(): void {
  }

}
