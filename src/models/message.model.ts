import { TYPE_MESSAGE } from "../enums/messages.enum";

export interface IMessage {
    message: string,
    type: TYPE_MESSAGE;
    isVisible: boolean;
}