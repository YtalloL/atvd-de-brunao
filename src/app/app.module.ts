import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { ExibeMensagemComponent } from './exibe-mensagem/exibe-mensagem.component';

@NgModule({
declarations: [
AppComponent,
ExibeMensagemComponent
],
imports: [
BrowserModule,
FormsModule
 ],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }