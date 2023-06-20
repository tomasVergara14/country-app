import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  
  @Input()
  public placeholder: string = '';

  @ViewChild('txtSearch')
  public newInput!:ElementRef<HTMLInputElement>;

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter;

  public onSearch():void{
    const newTag = this.newInput.nativeElement.value;
    this.onValue.emit(newTag);
  }

}
