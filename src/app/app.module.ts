import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HamburgerComponent } from './header/hamburger/hamburger.component';
import { NavProfileComponent } from './header/nav-profile/nav-profile.component';
import { SearchComponent } from './header/search/search.component';
import { SidebarLinkComponent } from './sidebar/sidebar-link/sidebar-link.component';
import { SidebarLinksComponent } from './sidebar/sidebar-links/sidebar-links.component';
import { VideoCardComponent } from './main/video-card/video-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    HamburgerComponent,
    NavProfileComponent,
    SearchComponent,
    SidebarLinkComponent,
    SidebarLinksComponent,
    VideoCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
