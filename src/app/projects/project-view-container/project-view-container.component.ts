import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Projects } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-view-container',
  templateUrl: './project-view-container.component.html'
})
export class ProjectViewContainerComponent implements OnInit {

  private id: number;

  public projectView$: Observable<Projects>;
  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute) {
    this.projectView$ = new Observable();
  }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    if (this.id) {
      this.projectView$ = this.projectService.getProjectById(this.id);
    }
  }

}
