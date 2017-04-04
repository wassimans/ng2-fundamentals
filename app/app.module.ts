import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventService,
    EventRouteActivator,
    EventsListResolver
} from './events/index'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'
import { ProfileComponent } from "./user/profile.component"

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