import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {EditorService} from '../services/editor.service';
import {IElement} from '../models/element.model';

@Directive({
  selector: '[appEditableElement]'
})
export class EditableElementDirective implements OnInit {

  @Input() autoSelect: boolean = null;

  public elementSettings: IElement = {
    width: 20,
    autoWidth: false,
    height: 20,
    autoHeight: false,
    margin: {left: 2, right: 2, top: 2, bottom: 2},
    border: {
      left: {color: '#000', type: 'solid', width: 2},
      right: {color: '#000', type: 'solid', width: 2},
      top: {color: '#000', type: 'solid', width: 2},
      bottom: {color: '#000', type: 'solid', width: 2},
    },
    padding: {left: 2, right: 2, top: 2, bottom: 2},
    borderRadius: {topLeft: 4, topRight: 4, bottomLeft: 4, bottomRight: 4},
  };

  constructor(
    private el: ElementRef<HTMLDivElement>,
    private renderer: Renderer2,
    private editor: EditorService
  ) { }

  ngOnInit(): void {

    this.createBaseStructure();

    this.renderer.listen(this.el.nativeElement, 'click', ($event) => {
      $event.stopPropagation();
      this.editor.select(this);
    });

    this.setElementCSSVariables();

    if ((this.autoSelect !== null) && (this.autoSelect !== false)) {

      this.editor.select(this);

    }

  }

  private createBaseStructure(): void {

    this.renderer.addClass(this.el.nativeElement, 'element-editable');

    const margin = this.renderer.createElement('div');
    const border = this.renderer.createElement('div');
    const padding = this.renderer.createElement('div');
    const content = this.renderer.createElement('div');

    this.renderer.addClass(margin, 'element-margin');
    this.renderer.addClass(border, 'element-border');
    this.renderer.addClass(padding, 'element-padding');
    this.renderer.addClass(content, 'element-content');

    this.renderer.appendChild(padding, content);
    this.renderer.appendChild(border, padding);
    this.renderer.appendChild(margin, border);
    this.renderer.appendChild(this.el.nativeElement, margin);

  }

  public select(): void {

    this.renderer.addClass(this.el.nativeElement, 'selected');

  }

  public unselect(): void {

    this.renderer.removeClass(this.el.nativeElement, 'selected');

  }

  public setWidth(value: number): void {

    this.elementSettings.width = value;
    this.setElementCSSVariables();

  }

  public toggleAutoWidth(value: boolean): void {

    this.elementSettings.autoWidth = value;
    this.setElementCSSVariables();

  }

  public setHeight(value: number): void {

    this.elementSettings.height = value;
    this.setElementCSSVariables();

  }

  public toggleAutoHeight(value: boolean): void {

    this.elementSettings.autoHeight = value;
    this.setElementCSSVariables();

  }

  public setMargin(value: number, side: string): void {

    if (side === 'all') {

      this.elementSettings.margin.left = value;
      this.elementSettings.margin.right = value;
      this.elementSettings.margin.top = value;
      this.elementSettings.margin.bottom = value;

    } else if (side === 'left') {
      this.elementSettings.margin.left = value;
    } else if (side === 'right') {
      this.elementSettings.margin.right = value;
    } else if (side === 'top') {
      this.elementSettings.margin.top = value;
    } else if (side === 'bottom') {
      this.elementSettings.margin.bottom = value;
    }

    this.setElementCSSVariables();

  }

  public setPadding(value: number, side: string): void {

    if (side === 'all') {

      this.elementSettings.padding.left = value;
      this.elementSettings.padding.right = value;
      this.elementSettings.padding.top = value;
      this.elementSettings.padding.bottom = value;

    } else if (side === 'left') {
      this.elementSettings.padding.left = value;
    } else if (side === 'right') {
      this.elementSettings.padding.right = value;
    } else if (side === 'top') {
      this.elementSettings.padding.top = value;
    } else if (side === 'bottom') {
      this.elementSettings.padding.bottom = value;
    }

    this.setElementCSSVariables();

  }
  
  public setBorderRadius(value: number, side: string): void {

    if (side === 'all') {

      this.elementSettings.borderRadius.topLeft = value;
      this.elementSettings.borderRadius.topRight = value;
      this.elementSettings.borderRadius.bottomLeft = value;
      this.elementSettings.borderRadius.bottomRight = value;

    } else if (side === 'topLeft') {
      this.elementSettings.borderRadius.topLeft = value;
    } else if (side === 'topRight') {
      this.elementSettings.borderRadius.topRight = value;
    } else if (side === 'bottomLeft') {
      this.elementSettings.borderRadius.bottomLeft = value;
    } else if (side === 'bottomRight') {
      this.elementSettings.borderRadius.bottomRight = value;
    }

    this.setElementCSSVariables();

  }

  private setElementCSSVariables(): void {

    // WIDTH
    if (this.elementSettings.autoWidth) {
      this.el.nativeElement.style.setProperty('--element-content-width', 'auto');
    } else {
      this.el.nativeElement.style.setProperty('--element-content-width', this.elementSettings.width + 'px');
    }
    // HEIGHT
    if (this.elementSettings.autoHeight) {
      this.el.nativeElement.style.setProperty('--element-content-height', 'auto');
    } else {
      this.el.nativeElement.style.setProperty('--element-content-height', this.elementSettings.height + 'px');
    }

    // MARGIN
    this.el.nativeElement.style.setProperty('--element-margin-left', this.elementSettings.margin.left + 'px');
    this.el.nativeElement.style.setProperty('--element-margin-right', this.elementSettings.margin.right + 'px');
    this.el.nativeElement.style.setProperty('--element-margin-top', this.elementSettings.margin.top + 'px');
    this.el.nativeElement.style.setProperty('--element-margin-bottom', this.elementSettings.margin.bottom + 'px');

    // PADDING
    this.el.nativeElement.style.setProperty('--element-padding-left', this.elementSettings.padding.left + 'px');
    this.el.nativeElement.style.setProperty('--element-padding-right', this.elementSettings.padding.right + 'px');
    this.el.nativeElement.style.setProperty('--element-padding-top', this.elementSettings.padding.top + 'px');
    this.el.nativeElement.style.setProperty('--element-padding-bottom', this.elementSettings.padding.bottom + 'px');

    // BORDER RADIUS
    this.el.nativeElement.style.setProperty('--element-border-radius-top-left', this.elementSettings.borderRadius.topLeft + 'px');
    this.el.nativeElement.style.setProperty('--element-border-radius-top-right', this.elementSettings.borderRadius.topRight + 'px');
    this.el.nativeElement.style.setProperty('--element-border-radius-bottom-left', this.elementSettings.borderRadius.bottomLeft + 'px');
    this.el.nativeElement.style.setProperty('--element-border-radius-bottom-right', this.elementSettings.borderRadius.bottomRight + 'px');

    // BORDER
    this.el.nativeElement.style.setProperty('--element-border-left', this.elementSettings.border.left.width + 'px');
    this.el.nativeElement.style.setProperty('--element-border-right', this.elementSettings.border.right.width + 'px');
    this.el.nativeElement.style.setProperty('--element-border-top', this.elementSettings.border.top.width + 'px');
    this.el.nativeElement.style.setProperty('--element-border-bottom', this.elementSettings.border.bottom.width + 'px');

  }

}
