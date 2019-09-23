import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'toast-bar',
  styleUrl: 'toast-bar.scss'
})
export class ToastBar {
  @Element() el!: Element;

  @Prop() selectedIcon?: {
    name: string,
    icons: string[],
    tags: string[]
  };
  @Prop() selectedIconType?: string;
  @Prop() typeSuffix?: string;

  @State() showCopiedConfirm?: number;
  @State() hadIconOnce = false;
  @State() touchStartY?: number;
  @State() touchEndY?: number;

  @Event() clearToast: EventEmitter;
  @Event() toggleHeaderSearch: EventEmitter;

  handleCodeClick(attrName: any) {
    const codeElParent = this.el.querySelector('.toast-bar__section:first-child');
    const el = document.createElement('textarea');

    el.value = `<ion-icon name="${ attrName }"></ion-icon>`;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    if (this.showCopiedConfirm) {
      window.clearTimeout(this.showCopiedConfirm);
      this.showCopiedConfirm = 0;
    }
    codeElParent.classList.add('copied');
    this.showCopiedConfirm = window.setTimeout(() => {
      codeElParent.classList.remove('copied');
      this.showCopiedConfirm = 0;
    }, 1500);
  }

  componentDidLoad() {
    this.el.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
    this.el.addEventListener('touchend', this.handleTouchEnd.bind(this), false);
  }

  handleTouchStart(ev: any) {
    if (ev.target.classList.contains('toast-bar--inner')) {
      ev.preventDefault();
      this.touchStartY = ev.changedTouches[0].screenY;
    }
  }

  handleTouchEnd(ev: any) {
    if (ev.target.classList.contains('toast-bar--inner')) {
      ev.preventDefault();
      this.touchEndY = ev.changedTouches[0].screenY;
      if (this.touchEndY > this.touchStartY) { // swiped down
        this.clearToast.emit();
      }
    }
  }

  render() {
    let snippetLength;
    let iconType;
    let iconAttrName;
    let activeDownloadLinks = null;

    if (this.selectedIcon) {
      if (!this.hadIconOnce) this.hadIconOnce = true;

      iconAttrName = this.selectedIcon.name + this.typeSuffix;
      iconType = this.selectedIcon.icons[0].startsWith('logo-') ? 'logo' : this.selectedIconType;

      if (iconType === 'logo') iconAttrName = 'logo-' + iconAttrName;

      snippetLength = (`<ion-icon name="${ iconAttrName }"></ion-icon>`.length * 8) + 32;

      activeDownloadLinks = this.selectedIcon.icons.map((name) => {
        const type = name.substr(0, name.indexOf('-'));
        console.log(name)

        let heading;
        if (name.includes('-outline')) {
          heading = 'OUTLINE';
        } else if (name.includes('-sharp')) {
          heading = 'SHARP';
        } else if (name.includes('logo-')) {
          heading = 'LOGO';
        } else {
          heading = 'DEFAULT';
        }

        return (
          <div class="toast-bar__section">
            <div class="toast-bar__section-header">
              <h6>{ heading }</h6>
            </div>
            <div class="btn-group">
              <div class="btn btn--gray btn--small btn--icon">
                <svg>
                  <use xlinkHref={`#${name}`}/>
                </svg>
              </div>
              <a class="btn btn--gray btn--small" download={`/ionicons/svg/${name}.svg`} href={`/ionicons/svg/${name}.svg`}>
                <svg>
                  <use xlinkHref={`#download`}/>
                </svg>
                SVG
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <div
        class={`toast-bar ${this.selectedIcon ? 'isVisible' : ''} ${!this.selectedIcon && this.hadIconOnce ? 'isHidden' : ''} ${!this.hadIconOnce ? 'preload' : ''}`}
        onClick={ev => ev.stopPropagation()}>

        <div class="container">
          <div class="toast-bar--inner">
            {this.selectedIcon && <h4>{this.selectedIcon.name}</h4>}
            {this.selectedIcon &&
              <div class="toast-bar__details">

                <div class="toast-bar__section" style={{ maxWidth: snippetLength + 'px' }}>
                  <div class="toast-bar__section-header">
                    <div>
                      <h6>Web component code</h6>
                      <span class="confirmation"><i class="ion ion-md-checkmark"></i>Copied</span>
                    </div>
                    <stencil-route-link
                      url={`/usage#${iconType}-${ this.selectedIcon.name }`}
                      onClick={() => this.toggleHeaderSearch.emit('hide')}>
                      Usage
                      <i class="ion ion-ios-arrow-forward"></i>
                    </stencil-route-link>
                  </div>

                  <code>
                    <span class="hover-highlight" onClick={() => this.handleCodeClick(iconAttrName)}>
                      {'<'}<span class="yellow">ion-icon</span>&nbsp;<span class="orange">name</span>{'='}<span class="green">{`"${iconAttrName}"`}</span>{'>'}{'</'}<span class="yellow">ion-icon</span>{'>'}
                    </span>
                  </code>

                </div>

                { activeDownloadLinks }

              </div>
            }
          </div>
        </div>

      </div>
    );
  }
}
