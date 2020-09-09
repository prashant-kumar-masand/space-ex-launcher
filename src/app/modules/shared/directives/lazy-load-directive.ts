import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[imgLazyLoadDirective]'
})
export class LazyLoadDirective implements AfterViewInit {
  @HostBinding('attr.src') srcAttr =
    '../../../../assets/images/default-image.jpg';
  @Input() src: string;
  @Input() id: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  /**
   * @function canLazyLoad
   * @description used to check whether Intersection Observer is supported or not.
   */
  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  /**
   * @function lazyLoadImage
   * @description used to lazy load image by using Intersection Observer .
   */
  private lazyLoadImage() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }

  /**
   * @function loadImage
   * @description used to setting image on the html image tag .
   */
  private loadImage() {
    if (this.id) this.srcAttr = this.id;
  }
}
