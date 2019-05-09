import {IElement} from '../element.model';

declare namespace HTMLElement {
  export interface HtmlDivElement {
    editorData: IElement;
  }
}
