import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageContainerComponent } from './image-container/image-container.component';
import { DragImageDirective } from './drag-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImageContainerComponent,
    DragImageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
