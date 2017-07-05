import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './sections/home/home.component';
import { StatisticsComponent } from './sections/statistics/statistics.component';
import { NoContentComponent } from './sections/no-content/no-content.component';
import { MoviesComponent } from './sections/movies/movies.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'movies', component: MoviesComponent },
    { path: '**', component: NoContentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [
        HomeComponent,
        StatisticsComponent,
        NoContentComponent,
        MoviesComponent
    ]
})
export class AppRoutingModule {
}
