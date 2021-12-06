import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[absHighlightChuckNorris]'
})
export class HighlightChuckNorrisDirective implements OnChanges {

  @Input() absHighlightChuckNorris!: string;

  constructor(private el: ElementRef) { }

  ngOnChanges(): void {
    this.el.nativeElement.innerHTML = this.highLiteChuckNorris(this.absHighlightChuckNorris);
  }

  private highLiteChuckNorris(text: string) {
    const reg = new RegExp('Chuck Norris');
    return text.replace(reg, '<span class="highlight">Chuck Norris</span>');
  }

}
