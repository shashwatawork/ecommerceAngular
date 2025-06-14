import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the components you want to route to
import { AboutComponent } from './pages/about/about.component';
import { StoryComponent } from './pages/story/story.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';

import { HomeComponent } from './pages/home/home.component'; // Add this import

const routes: Routes = [
  { path: '', component: HomeComponent }, // Set HomeComponent as the default
  { path: 'about', component: AboutComponent },
  { path: 'story', component: StoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}