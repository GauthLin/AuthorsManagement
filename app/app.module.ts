import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';
import {HeroService} from "./hero.service";
import {HeroDetailComponent} from "./hero-detail.component";
import {DashboardComponent} from "./dashboard.component";
import {AddHeroComponent} from "./add-hero.component";
import {AddArticleComponent} from "./add-article.component";
import {ArticleService} from "./article.service";
import {ArticleDetailComponent} from "./article-detail.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'detail/:id',
                component: HeroDetailComponent
            },
            {
                path: 'add-hero',
                component: AddHeroComponent
            },
            {
                path: 'add-article',
                component: AddArticleComponent
            },
            {
                path: 'detail-article/:id',
                component: ArticleDetailComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        AddHeroComponent,
        AddArticleComponent,
        ArticleDetailComponent,
    ],
    providers: [
        HeroService,
        ArticleService,
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { 
    
}
