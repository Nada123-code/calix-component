import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    
    AppComponent,
         

  ],
  imports: [
    ContainerComponent,
    BrowserModule,
    
    
  ],
 
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
