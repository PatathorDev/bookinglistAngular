import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Booking } from '../booking.service';

@Component({
  selector: 'app-booking-modal',
  imports: [CommonModule],
  templateUrl: './booking-modal.component.html',
  styleUrl: './booking-modal.component.scss'
})
export class BookingModalComponent {
  @Input() booking: Booking | null = null;
}
