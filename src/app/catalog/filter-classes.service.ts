import { Injectable } from '@angular/core';
import {IClass} from "./class.model";

@Injectable({
  providedIn: 'root',
})
export class FilterClassesService {
  public filter(filter: string, classes: IClass[]): IClass[]
  {
    if (!filter) {
      return classes;
    }

    if (filter === 'GEN') {
      return this.showOnlyGeneralCourses(classes);
    }

    return classes.filter(c => c.course.courseNumber.startsWith(filter));
  }

  private showOnlyGeneralCourses(classes: IClass[]): IClass[]
  {
    return classes.filter(c =>
      !c.course.courseNumber.startsWith('CH') &&
      !c.course.courseNumber.startsWith('PO') &&
      !c.course.courseNumber.startsWith('SP'));
  }
}
