import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule to use ngModel

import { AppComponent } from './app.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    // Remove the standalone components here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ExpenseFormComponent, // Import standalone components
    ExpenseListComponent, // Import standalone components
    LoginComponent, // Import standalone components
    RegisterComponent, // Import standalone components
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
