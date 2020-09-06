import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class DOMHelper<T> {
  private fixture: ComponentFixture<T>;

  constructor(fixture: ComponentFixture<T>) {
    this.fixture = fixture;
  }

  getText(tagName: string): string {
    const htmlElement = this.fixture.debugElement.query(By.css(tagName));
    if (htmlElement) {
      return htmlElement.nativeElement.textContent;
    }
  }

  getTotalCount(tagName: string): number {
    const htmlElement = this.fixture.debugElement.queryAll(By.css(tagName));
    return htmlElement.length;
  }
}
