import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { GalleryModule } from './gallery.module';

export function main() {
  describe('Gallery component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [GalleryModule]
      });
    });

    it(
      'should work',
      async(() => {
        TestBed.compileComponents().then(() => {
          const fixture = TestBed.createComponent(TestComponent);
          const galleryDOMEl = fixture.debugElement.children[0].nativeElement;

          expect(galleryDOMEl.querySelectorAll('h2')[0].textContent).toEqual(
            'Features'
          );
        });
      })
    );
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-gallery></sd-gallery>'
})
class TestComponent {}
