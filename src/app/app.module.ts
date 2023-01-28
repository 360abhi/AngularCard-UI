import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Classes } from './Services/classes.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { NavBarComponent } from './my-container/nav-bar/nav-bar.component';
import { HeaderComponent } from './my-container/header/header.component';
import { BottomOneComponent } from './my-container/bottom-one/bottom-one.component';


@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    NavBarComponent,
    HeaderComponent,
    BottomOneComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
