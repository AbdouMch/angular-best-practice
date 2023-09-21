import { Component } from '@angular/core';

import { IClass } from './class.model';
import {CatalogRepositoryService} from "./catalog-reapository.service";
import {UserRepositoryService} from "../services/user-repository.service";

@Component({
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {
  classes: IClass[] = [];
  visibleClasses: IClass[] = [];

  constructor(
    private catalogRepository: CatalogRepositoryService,
    public userRepository: UserRepositoryService
  ) { }

  ngOnInit() {
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
    if (!filter) {
      this.visibleClasses = this.classes;
      return;
    }

    if (filter === 'GEN') {
      this.showOnlyGeneralCourses();
    } else {
      this.visibleClasses = this.classes.filter(c => c.course.courseNumber.startsWith(filter));
    }
  }

  private showOnlyGeneralCourses() {
    this.visibleClasses = this.classes.filter(c =>
      !c.course.courseNumber.startsWith('CH') &&
      !c.course.courseNumber.startsWith('PO') &&
      !c.course.courseNumber.startsWith('SP'));
  }
}
