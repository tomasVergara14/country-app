import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
 
  @Input()
  public placeholder: string = '';

  @ViewChild('txtSearch')
  public newInput!:ElementRef<HTMLInputElement>;

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter;

  public debouncer: Subject<string> = new Subject<string>;
  public debouncerSubscriptions?: Subscription;
  
  ngOnInit(): void {

    this.debouncerSubscriptions = this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe(value =>{
      this.onValue.emit(value);
    })

  }

  ngOnDestroy(): void {

    this.debouncerSubscriptions?.unsubscribe()

  }
 

  public onSearch():void{
    const newTag = this.newInput.nativeElement.value;
    this.onValue.emit(newTag);
  }

  public onKeyPress():void{
    const newTag = this.newInput.nativeElement.value;
   this.debouncer.next(newTag);
  }

}
