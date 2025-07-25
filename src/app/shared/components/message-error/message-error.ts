import { Component, input } from '@angular/core';
import { LucideAngularModule, OctagonX } from 'lucide-angular';

@Component({
  selector: 'app-message-error',
  imports: [LucideAngularModule],
  templateUrl: './message-error.html',
  styleUrl: './message-error.css',
})
export class MessageError {
  messageError = input.required<string>();
  messageErrorIcon = OctagonX;
}
