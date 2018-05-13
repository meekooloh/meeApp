import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from 'app/services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  pageContent : string;
  constructor(private router: Router,
      private route: ActivatedRoute,
      private pageService: PageService) { }

  ngOnInit() {
      this.pageService.getRoutes() .subscribe( res => {
        this.router.parseUrl
        let actualRoute = this.route.snapshot.url &&
            this.route.snapshot.url.length > 0 ?
                this.route.snapshot.url[0].path: undefined;
        let route = res.find(r => r.route === actualRoute);
        this.pageService.getPageByRoute(route['_id']).subscribe( res => {
            this.pageContent = res && res.length > 0 ? res[0].pageContent : '';
        });
      })
  }

}
