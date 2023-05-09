import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './dashboard/toolbar/toolbar.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { AppRoutingModule } from './app-routing.module';
import { CursosModule } from './cursos/cursos.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,

  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolbarModule,
    AlumnosModule,
    AppRoutingModule,
    CursosModule,
    LoginModule,
    HttpClientModule,
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
