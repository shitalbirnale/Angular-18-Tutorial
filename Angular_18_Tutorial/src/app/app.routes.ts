import { Routes } from '@angular/router';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { ErrorHandlingPageComponent } from './Components/error-handling-page/error-handling-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path :'',
        component : DataBindingComponent
    }
];
