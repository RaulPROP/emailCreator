import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HtmlComponent } from './components/html/html.component';
import { EmailComponent } from './components/email/email.component';
import { EditorComponent } from './components/editor/editor.component';

import { EditableElementDirective } from './directives/editable-element.directive';

import { AngularMaterialModule } from './shared/angular-material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    EmailComponent,
    EditorComponent,
    EditableElementDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
