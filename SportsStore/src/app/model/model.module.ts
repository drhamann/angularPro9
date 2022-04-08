import { NgModule } from "@angular/core";
import { ProductRepository } from "../repository/product.repository";
import { StaticDataSource } from "./static.datasource";
@NgModule({
  providers: [ProductRepository, StaticDataSource]
})
export class ModelModule { }
