import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import { EventRouteActivator } from './events/event-route-activator.service'
import { EventsListResolver } from './events/events-list-resolver.service'
import { appRoutes } from './routes'
import { ProfileComponent } from "./user/profile.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
        ],
    declarations: [
        EventsAppComponent, 
        EventsListComponent, 
        EventThumbnailComponent, 
        NavBarComponent, 
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
        ],
    providers: [
        EventService, 
        ToastrService, 
        EventRouteActivator,
        EventsListResolver,
        {
            provide: 'canDeactivateCretaeEvent', useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}

function checkDirtyState(component:CreateEventComponent) {
    if (component.isDisrty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}