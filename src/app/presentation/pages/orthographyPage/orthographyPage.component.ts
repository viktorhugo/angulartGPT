import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent } from '@components/chat-bubbles/chatMessage/chatMessage.component';
import { MyMessageComponent } from '@components/chat-bubbles/myMessage/myMessage.component';
import { TextMessageBoxFileComponent, TextMessageEvent } from '@components/text-boxes/text-message-box-file/text-message-box-file.component';
import { TextMessageBoxEvent, TextMessageBoxSelectComponent } from '@components/text-boxes/text-message-box-select/text-message-box-select.component';
import { TextMessageBoxComponent } from '@components/text-boxes/text-message-box/text-message-box.component';
import { TypingLoaderComponent } from '@components/typingLoader/typingLoader.component';
import { Message } from '@interfaces/message.interface';
import { OpenAiService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent { 

  
  public messages = signal<Message[]>([ {isGpt: true, text: 'Hello world'}]);
  public isLoading = signal<boolean>(false);

  public openAiService = inject(OpenAiService);

  public handleMessage(prompt: string) {
    console.log(event);
  }

  public handleMessageWithFile( { file, prompt }: TextMessageEvent) {
    console.log(file);
    console.log(prompt);
  }

  public handleMessageWithSelect({ selectedOption, prompt }: TextMessageBoxEvent) {
    console.log(selectedOption);
    console.log(prompt);
  }
}
