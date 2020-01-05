import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ThoughtOfflinePersistenceService } from 'src/app/persistence/thought-offline-persistence.service';

@Component({
  selector: 'app-collect-thought',
  templateUrl: './collect-thought.component.html',
  styleUrls: ['./collect-thought.component.sass']
})
export class CollectThoughtComponent implements OnInit {

  thoughtText: string = "";

  constructor(titleService: Title, private readonly thoughtPersistence: ThoughtOfflinePersistenceService) {

    titleService.setTitle("Entropy - Collect Thoughts")
  }

  thoughtTextKeyPressEvent(event:Event) {
    try {
      this.thoughtPersistence.Add(this.thoughtText);
      this.thoughtText = "";
    } catch (exception) {
        alert('Persistence Error!!!');
    }



  }

  ngOnInit() {
  }

}
