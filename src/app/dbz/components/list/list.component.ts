import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input('charList')
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter;

  deleteCharacter(id?: string): void {
    if (!id) { return; }
    this.onDeleteCharacter.emit(id);
  }
}
