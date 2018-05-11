import { Resolve, ActivatedRoute, RouterStateSnapshot } from "@angular/router";
import { Category } from "../models/post";
import { CategoryService } from "../services/category.service";
import { Observable } from "rxjs/Observable";

export class CategoryResolver implements Resolve<Category[]> {

    constructor(private service: CategoryService) {}

    resolve(
        route: ActivatedRoute,
        state: RouterStateSnapshot
    ): Observable<Category[]> {
        return this.service.getAll();
    }
}