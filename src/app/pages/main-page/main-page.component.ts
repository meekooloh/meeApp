import { Component ,OnInit, Type, ViewChild, ViewEncapsulation,ChangeDetectionStrategy } from '@angular/core';
import { Router  ,RouterLink,RouterModule ,Routes} from '@angular/router';
import { routing } from './../../app.routing';
import { TodoService } from './../../services/todo.service';

@Component({

  moduleId: module.id,
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

    constructor(
      private todoService: TodoService) { 
    }
 
    ngOnInit() {
      // var prueba = this.todoService.getAll();
    }
 

    MOCKACTION(){
      debugger;
    }
}
