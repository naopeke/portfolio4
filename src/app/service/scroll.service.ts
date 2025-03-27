import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSource = new Subject<string>();
  scrollRequests$ = this.scrollSource.asObservable();

  requestScroll(section: string) {
    this.scrollSource.next(section);
  }
}
