import { Component, OnInit } from '@angular/core';
import {EditorService} from '../../services/editor.service';
import {EditableElementDirective} from '../../directives/editable-element.directive';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  private selectedElement: EditableElementDirective = null;

  public autoWidth = false;
  public autoHeight = false;

  public marginTogether = false;
  public paddingTogether = false;
  public borderRadiusTogether = false;

  constructor(private editor: EditorService) { }

  ngOnInit() {

    this.editor.selectedElement.subscribe(selected => {

      this.selectedElement = selected;

      if (selected !== null) {

        this.autoWidth = selected.elementSettings.autoWidth;

        this.autoHeight = selected.elementSettings.autoHeight;

        if (
          (selected.elementSettings.margin.left === selected.elementSettings.margin.right) &&
          (selected.elementSettings.margin.left === selected.elementSettings.margin.top) &&
          (selected.elementSettings.margin.left === selected.elementSettings.margin.bottom)
        ) {
          this.marginTogether = true;
        }

        if (
          (selected.elementSettings.padding.left === selected.elementSettings.padding.right) &&
          (selected.elementSettings.padding.left === selected.elementSettings.padding.top) &&
          (selected.elementSettings.padding.left === selected.elementSettings.padding.bottom)
        ) {
          this.paddingTogether = true;
        }

        if (
          (selected.elementSettings.borderRadius.topLeft === selected.elementSettings.borderRadius.topRight) &&
          (selected.elementSettings.borderRadius.topLeft === selected.elementSettings.borderRadius.bottomLeft) &&
          (selected.elementSettings.borderRadius.topLeft === selected.elementSettings.borderRadius.bottomRight)
        ) {
          this.borderRadiusTogether = true;
        }

      }

    });

  }

  public onWidthChange(event) {

    const newWidth = event.target.value;
    this.selectedElement.setWidth(newWidth);

  }

  public toggleWidth(event) {

    const checked = event.checked;

    this.selectedElement.toggleAutoWidth(checked);

  }

  public onHeightChange(event) {

    const newWidth = event.target.value;
    this.selectedElement.setHeight(newWidth);

  }

  public toggleHeight(event) {

    const checked = event.checked;

    this.selectedElement.toggleAutoHeight(checked);

  }

  public toggleMargin(event) {

    const checked = event.checked;

    if (checked) {

      this.selectedElement.setMargin(
        Math.max(
          this.selectedElement.elementSettings.margin.left,
          this.selectedElement.elementSettings.margin.right,
          this.selectedElement.elementSettings.margin.top,
          this.selectedElement.elementSettings.margin.bottom
          ),
        'all'
      );

    }

  }

  public onMarginChange(event, side: string) {

    const newMargin = event.target.value;
    this.selectedElement.setMargin(newMargin, side);

  }

  public togglePadding(event): void {

    const checked = event.checked;

    if (checked) {

      this.selectedElement.setPadding(
        Math.max(
          this.selectedElement.elementSettings.padding.left,
          this.selectedElement.elementSettings.padding.right,
          this.selectedElement.elementSettings.padding.top,
          this.selectedElement.elementSettings.padding.bottom
        ),
        'all'
      );

    }

  }

  public onPaddingChange(event, side: string) {

    const newPadding = event.target.value;
    this.selectedElement.setPadding(newPadding, side);

  }
  
  public toggleBorderRadius(event): void {

    const checked = event.checked;

    if (checked) {

      this.selectedElement.setBorderRadius(
        Math.max(
          this.selectedElement.elementSettings.borderRadius.topLeft,
          this.selectedElement.elementSettings.borderRadius.topRight,
          this.selectedElement.elementSettings.borderRadius.bottomLeft,
          this.selectedElement.elementSettings.borderRadius.bottomRight
        ),
        'all'
      );

    }

  }

  public onBorderRadiusChange(event, side: string) {

    const newBorderRadius = event.target.value;
    this.selectedElement.setBorderRadius(newBorderRadius, side);

  }
  
  

}
