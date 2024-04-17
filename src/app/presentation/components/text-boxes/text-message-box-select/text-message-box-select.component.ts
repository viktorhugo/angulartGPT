import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface Option {
  id: string;
  text: string;
}

export interface TextMessageBoxEvent {
  selectedOption: String;
  prompt?: string | null;
}

@Component({
  selector: 'app-text-message-box-select',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './text-message-box-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxSelectComponent { 
  @Input() placeholder: string = '';
  @Input({ required: true }) options!: Option[];
  @Input() disableCorrections: boolean = false;

  @Output() onMessage = new EventEmitter<TextMessageBoxEvent>();

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: ['', Validators.required ],
    selectedOption:[ '', Validators.required ]
  })

  public handleSubmit() {
    if ( this.form.invalid ) return;
    const { prompt, selectedOption } =  this.form.value;
    console.log({ prompt });
    
    this.onMessage.emit( { prompt, selectedOption: selectedOption! });
    this.form.reset();
    
  }
}
