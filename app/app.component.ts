import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit, OnDestroy{


  @ViewChild('audio') audio;
  time:number = 0;

  constructor(){}

  ngOnInit(){
    this.audio = this.audio.nativeElement;

    this.audio.play();

  }

  ngOnDestroy(){}

}
