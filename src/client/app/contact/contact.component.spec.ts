import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { ContactModule } from './contact.module';

export function main() {
  describe('Contact component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ContactModule]
      });
    });

    it(
      'should work',
      async(() => {
        TestBed.compileComponents().then(() => {
          const fixture = TestBed.createComponent(TestComponent);
          const contactDOMEl = fixture.debugElement.children[0].nativeElement;

          expect(contactDOMEl.querySelectorAll('h2')[0].textContent).toEqual(
            'Features'
          );
        });
      })
    );
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-contact></sd-contact>'
})
class TestComponent {}
