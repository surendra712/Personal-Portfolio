import { contactMessages, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private messages: ContactMessage[];
  private currentId: number;

  constructor() {
    this.messages = [];
    this.currentId = 1;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const newMessage: ContactMessage = {
      id: this.currentId++,
      ...message,
    };
    this.messages.push(newMessage);
    return newMessage;
  }
}

export const storage = new MemStorage();