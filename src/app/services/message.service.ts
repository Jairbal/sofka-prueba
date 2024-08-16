import { Injectable } from '@angular/core';
import { TYPE_MESSAGE } from '../../enums/messages.enum';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMessage } from '../../models/message.model';
import { DELAY_FOR_CLOSE_TOAST } from '../../constants/message.constants';

const INTITAL_STATE: IMessage = {
  isVisible: false,
  message: '',
  type: TYPE_MESSAGE.info
}


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private state = new BehaviorSubject<IMessage>(INTITAL_STATE);
  public state$: Observable<IMessage> = this.state.asObservable();
  constructor() { }

  onInfo(text: string): void {
    const infoState: IMessage = {
      type: TYPE_MESSAGE.info,
      message: text,
      isVisible: true,
    }
    this.state.next(infoState);
    this.setClose();
  }

  onSuccess(text: string): void {
    const successState: IMessage = {
      type: TYPE_MESSAGE.successful,
      message: text,
      isVisible: true,
    }
    this.state.next(successState);
    this.setClose();
  }

  onWarn(text: string): void {
    const warnState: IMessage = {
      type: TYPE_MESSAGE.warning,
      message: text,
      isVisible: true,
    }
    this.state.next(warnState);
    this.setClose();
  }

  onError(text: string): void {
    const errorState: IMessage = {
      type: TYPE_MESSAGE.error,
      message: text,
      isVisible: true,
    }
    this.state.next(errorState);
    this.setClose();
  }

  close(): void {
    const closeState: IMessage = {
      type: TYPE_MESSAGE.info,
      message: '',
      isVisible: false,
    }
    this.state.next(closeState);
  }

  setClose(): void {
    setTimeout(() => {
      this.close();
    }, DELAY_FOR_CLOSE_TOAST)
  }
}
