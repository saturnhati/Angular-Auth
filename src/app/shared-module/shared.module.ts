import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './components/post-card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';

// destrutturo l'array component per non doverlo riscrivere sotto due volte
// sia in declarations che in exports, quindi posso usare lo spread
const Component = [PostCardComponent, HighlightDirective, MaiuscoloPipe];

@NgModule({
  declarations: [...Component],
  imports: [CommonModule],
  exports: [...Component],
})
export class SharedModule {}
