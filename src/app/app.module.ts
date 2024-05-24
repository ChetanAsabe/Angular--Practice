import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseParentComponent } from './course-parent/course-parent.component';
import { CourseChildComponent } from './course-child/course-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseParentComponent,
    CourseChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
