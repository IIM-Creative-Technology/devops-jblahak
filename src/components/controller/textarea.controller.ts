import InputController from './input.controller';

export class TextareaController extends InputController {
  public isValueValid(value: string): boolean {
    return true;
  }
}