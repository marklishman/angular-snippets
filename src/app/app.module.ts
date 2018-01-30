import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EnumIteratorComponent } from './examples/enum-iterator.component';
import { AppRoutingModule } from './app-routing.module';
import { ArrayGenComponent } from './examples/array-gen.component';
import { DataAttributeComponent } from './examples/data-attribute.component';


@NgModule({
  declarations: [
    AppComponent,
    EnumIteratorComponent,
    ArrayGenComponent,
    DataAttributeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
