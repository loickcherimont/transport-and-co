import { Routes } from "@angular/router";
import { ContactAndHelpPage } from "./pages/contact-and-help-page/contact-and-help-page";
import { Home } from "./pages/home/home";
import { LinesAndSchedules } from "./pages/lines-and-schedules/lines-and-schedules";
import { TicketsPage } from "./pages/tickets-page/tickets-page";

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'lines-and-schedules',
        component: LinesAndSchedules,
    },
    {
        path: 'tickets',
        component: TicketsPage, 
    },
    {
        path: 'contact-and-help',
        component: ContactAndHelpPage,
    }
];
