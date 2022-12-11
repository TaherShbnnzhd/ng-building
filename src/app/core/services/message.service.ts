/* بسم الله الرحمن الرحیم */

import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  /** Message pool */
  public messages: string[];

  constructor() {

    this.messages = [];
  }

  /**
   * Add message to message pool
   * 
   * @param message = string message
   */
  public add(message: string): void {

    this.messages.push(message);
  }

  /** Empty message pool */
  public clear(): void {

    this.messages = [];
  }
}
