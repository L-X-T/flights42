import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-booking-tabs',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './booking-navigation.html',
})
export class BookingNavigation {}
