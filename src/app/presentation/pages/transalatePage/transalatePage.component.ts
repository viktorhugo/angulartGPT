import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-transalate-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './transalatePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TranslatePageComponent { }
