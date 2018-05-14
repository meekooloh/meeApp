import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from 'app/services/page.service';
import { WindowService } from '../../services/window.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  pageContent : string;
  style: any = {};
  constructor(private router: Router,
      private route: ActivatedRoute,
      private windowService: WindowService,
      private pageService: PageService) { }

  ngOnInit() {
      this.style['min-height'] = String(this.windowService.window.document.getElementsByClassName('container')[0].offsetHeight - 80) + 'px';
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
