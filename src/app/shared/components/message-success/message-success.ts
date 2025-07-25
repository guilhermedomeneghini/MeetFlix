import { Component, input } from '@angular/core';
import { LucideAngularModule, CircleCheck } from 'lucide-angular';

@Component({
  selector: 'app-message-success',
  imports: [LucideAngularModule],
  templateUrl: './message-success.html',
  styleUrl: './message-success.css',
})
export class MessageSuccess {
  messageSuccessIcon = CircleCheck;
  messageSuccess = input.required<string>();
}
