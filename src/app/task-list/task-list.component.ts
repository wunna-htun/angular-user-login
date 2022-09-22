import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../core/task-service.service';
import { task } from '../model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskList :any;
  
  constructor(private taskService:TaskServiceService) { }

  ngOnInit() {
    console.log("task list");
    this.taskService.getTaskList().subscribe(res=>{
      console.log(res);
      
    })
    console.log();
    
  }

}
