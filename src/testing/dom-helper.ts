import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

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

  getAllTextElement(tagName: string): Array<DebugElement> {
    const htmlElement = this.fixture.debugElement.queryAll(By.css(tagName));
    if (htmlElement) {
      return htmlElement;
    }
  }

  getTotalCount(tagName: string): number {
    const htmlElement = this.fixture.debugElement.queryAll(By.css(tagName));
    return htmlElement.length;
  }
}
