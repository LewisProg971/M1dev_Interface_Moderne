import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'binding-test',
        loadComponent: () => import('./binding-test/binding-test').then((m) => m.BindingTest),
    },
    
];
