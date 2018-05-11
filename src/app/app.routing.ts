import { Routes, RouterModule } from '@angular/router';
 
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { PostComponent } from './components/post/post.component';
import { PageComponent } from './components/page/page.component';


//var str     = "reset?token=J&return_url=/page/new";

export const appRoutes = [
    //{ path: '', component: MainPageComponent, meta: {caption:"home"},canActivate: [AuthGuard] },
    

    /*
            meta:
                authentication(routes for authentication purpose, not needed to be authenticated)
                global routes for whole page purpose, they're tabs in the header

    */
    
    //{ path: 'home',component: MainPageComponent, meta:{caption:"home",range:"global"}  },
 
    // otherwise redirect to home
    { path: '', component: ListComponent, pathMatch: "full" },
    { path: 'list', component: ListComponent },
    { path: 'articles/:id', component: PostComponent },
    { path: '**', redirectTo: '/' , meta:{caption:"anything else "} }
];
 
export const routing = RouterModule.forRoot(appRoutes);
