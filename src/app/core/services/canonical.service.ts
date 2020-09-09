import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {
  constructor(@Inject(DOCUMENT) private dom) {}

  public setCanonicalURL(url?: string) {
    const canURL = url == undefined ? this.dom.URL : url;
    /** canonical link for Mobile version **/
    const linkMobile: HTMLLinkElement = this.dom.createElement('link');
    linkMobile.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(linkMobile);
    linkMobile.setAttribute('href', canURL);
    linkMobile.setAttribute('media', 'only screen and (min-width: 700px)');
    /** canonical link for Desktop version **/
    const linkDesktop: HTMLLinkElement = this.dom.createElement('link');
    linkDesktop.setAttribute('rel', 'alternate');
    this.dom.head.appendChild(linkDesktop);
    linkDesktop.setAttribute('href', canURL);
    linkDesktop.setAttribute('media', 'only screen and (max-width: 700px)');
  }
}
