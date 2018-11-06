import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: "", redirectTo: "/list", pathMatch: "full" },
  { path: "list", component: ListComponent },
  { path: "item/:uuid", component: ItemComponent }

];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
