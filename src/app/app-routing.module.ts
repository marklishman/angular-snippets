import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { EnumIteratorComponent } from './examples/enum-iterator.component';
import { ArrayGenComponent } from './examples/array-gen.component';
import { DataAttributeComponent } from './examples/data-attribute.component';


const routes: Routes = [
  {path: '', redirectTo: '/array-gen', pathMatch: 'full'},
  {path: 'array-gen', component: ArrayGenComponent},
  {path: 'enum-iter', component: EnumIteratorComponent},
  {path: 'data-attribute', component: DataAttributeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppRoutingModule {
}
