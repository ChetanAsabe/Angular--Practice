import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseParentComponent } from './course-parent/course-parent.component';
import { CourseChildComponent } from './course-child/course-child.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustomDirective } from './directive/custom.directive';
import { NgforComponent } from './ngfor/ngfor.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SimpleformComponent } from './simpleform/simpleform.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseParentComponent,
    CourseChildComponent,
    DirectivesComponent,
    TodoComponent,
    NgstyleComponent,
    NgclassComponent,
    CustomDirective,
    NgforComponent,
    SimpleformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
