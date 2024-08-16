import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { TYPE_MESSAGE } from '../../../enums/messages.enum';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit{
  type: TYPE_MESSAGE = TYPE_MESSAGE.info;
  message: string = ''
  isVisible = true;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.state$.subscribe({
      next:(currentState) => {
        this.type = currentState.type;
        this.message = currentState.message;
        this.isVisible = currentState.isVisible
      }
    });
  }

  close() {
    this.messageService.close();
    this.isVisible = false;
  }
}
