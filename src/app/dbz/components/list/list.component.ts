import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from "../../interfaces/character";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character [] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCharacter( id?: string ): void {
    // TODO: Emitir el ID del personaje
    if ( !id ) return;

    // console.log({ id })

    this.onDelete.emit( id );
  }
}
