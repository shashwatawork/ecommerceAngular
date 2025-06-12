import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the components you want to route to
import { AboutComponent } from './pages/about/about.component';
import { StoryComponent } from './pages/story/story.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';

const routes: Routes = [
{ path: 'about', component: AboutComponent },
{ path: 'story', component: StoryComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'appointment', component: AppointmentComponent },
{ path: '', redirectTo: '/about', pathMatch: 'full' },
{ path: '**', redirectTo: '/about' }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}