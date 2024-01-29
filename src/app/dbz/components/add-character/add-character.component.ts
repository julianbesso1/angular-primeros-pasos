import { Component, EventEmitter, Output } from '@angular/core'
import { Character } from '../../interfaces/character.interface';
import { PropertyWrite } from '@angular/compiler';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: []
})
export class AddCharacterComponent {

  @Output()
  public onAddCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {

    if (this.character.name.length === 0) {
      return;
    }

    this.onAddCharacter.emit(
      this.character
    );

    this.character = {
      name: '',
      power: 0
    };
  }

}
