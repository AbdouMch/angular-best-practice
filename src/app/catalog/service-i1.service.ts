import { Injectable } from '@angular/core';

@Injectable()
export class ServiceI1Service {
  private static instanceCount: number = 0;
  constructor() {
    ServiceI1Service.instanceCount++;
    console.log(ServiceI1Service.instanceCount);
  }

  hello() {
    console.log("hello")
  }
}
