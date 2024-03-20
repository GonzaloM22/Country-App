import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = "";

  @Output()
  public onValue = new EventEmitter<string>();


  public onSearch(term:string) {
    this.onValue.emit(term);
  }
}
