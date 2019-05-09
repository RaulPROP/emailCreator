import {Injectable, Renderer2} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IElement} from '../models/element.model';
import {EditableElementDirective} from '../directives/editable-element.directive';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  private selectedElementSubject: BehaviorSubject<EditableElementDirective> = new BehaviorSubject<EditableElementDirective>(null);
  public selectedElement: Observable<EditableElementDirective> = this.selectedElementSubject.asObservable();

  constructor() { }

  public select(element: EditableElementDirective): void {

    if (this.selectedElementSubject.getValue() !== null) {
      this.selectedElementSubject.getValue().unselect();
    }

    this.selectedElementSubject.next(element);

    element.select();

  }

}
