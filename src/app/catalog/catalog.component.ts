import {Component, OnInit} from '@angular/core';

import { IClass } from './class.model';
import {CatalogRepositoryService} from "./catalog-reapository.service";
import {UserRepositoryService} from "../services/user-repository.service";
import {FilterClassesService} from "./filter-classes.service";
import {ServiceI1Service} from "./service-i1.service";

@Component({
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit {
  classes: IClass[] = [];
  visibleClasses: IClass[] = [];
  orderByField: string = '';

  constructor(
    private catalogRepository: CatalogRepositoryService,
    public userRepository: UserRepositoryService,
    private filterClassesService: FilterClassesService,
     private serviceI1Service: ServiceI1Service// here we will have the instance of the Root injector
  ) { }

  ngOnInit() {
    this.serviceI1Service.hello();

    this.catalogRepository.getCatalog()
      .subscribe((classes: IClass[]) => { this.classes = classes; this.applyFilter('') });
  }

  enroll(classToEnroll: IClass) {
    classToEnroll.processing = true;
    this.catalogRepository.enroll(classToEnroll.classId)
      .subscribe({
        error: (err) => { console.error(err); classToEnroll.processing = false },
        complete: () => { classToEnroll.processing = false; classToEnroll.enrolled = true; },
      });
  }

  drop(classToDrop: IClass) {
    classToDrop.processing = true;
    this.catalogRepository.drop(classToDrop.classId)
      .subscribe({
        error: (err) => { console.error(err); classToDrop.processing = false },
        complete: () => { classToDrop.processing = false; classToDrop.enrolled = false; }
      });
  }

  applyFilter(filter: string) {
    this.visibleClasses = this.filterClassesService.filter(filter, this.classes);
  }

  mutateFirstProfessor() {
    this.visibleClasses[0].professor = 'Lucas';
  }

  immutablyUpdateFirstProfessor() {
    this.visibleClasses = [
      {...this.visibleClasses[0], professor: 'Lucas'},
      ...this.visibleClasses.slice(1)
    ];
  }
}
