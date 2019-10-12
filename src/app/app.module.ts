import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PostComponent } from './post/post.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    HeaderBarComponent,
    PaginationComponent,
    PostComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
