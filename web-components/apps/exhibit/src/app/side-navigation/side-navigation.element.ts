export class SideNavigationElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Side navigation';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div is="vl-side-navigation-reference">
                        <section id="content-1" is="vl-region">
                            <h2 is="vl-h2">content 1</h2>
                        </section>

                        <section id="content-1-1" is="vl-region">
                            <h3 is="vl-h3">content 1 - 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </section>

                        <section id="content-1-2" is="vl-region">
                            <h3 is="vl-h3">content 1 - 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </section>

                        <section id="content-1-3" is="vl-region">
                            <h3 is="vl-h3">content 1 - 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </section>

                        <section id="content-1-4" is="vl-region">
                            <h3 is="vl-h3">content 1 - 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </section>

                        <section id="content-2" is="vl-region">
                            <h2 is="vl-h2">content 2</h2>
                        </section>

                        <section id="content-3" is="vl-region">
                            <h2 is="vl-h2">content 3</h2>
                        </section>

                        <section id="content-3-1" is="vl-region">
                            <h3 is="vl-h3">content 3 - 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </section>

                        <section id="content-3-2" is="vl-region">
                            <h3 is="vl-h3">content 3 - 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </section>

                        <section id="content-3-3" is="vl-region">
                            <h3 is="vl-h3">content 3 - 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </section>

                        <section id="content-3-4" is="vl-region">
                            <h3 is="vl-h3">content 3 - 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </section>

                        <section is="vl-region">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </section>
                    </div>
                    
                </div>
            </div>
      <nav is="vl-side-navigation" aria-label="inhoudsopgave" data-vl-side-navigation="" data-vl-side-navigation-scrollable="" data-vl-scrollspy="" data-vl-scrollspy-mobile="Navigatie" data-vl-sticky="" data-vl-sticky-offset-top="43" class="vl-side-navigation js-vl-side-navigation js-vl-sticky js-vl-scrollspy js-vl-sticky--viewport-top" data-vl-scrollspy-id="o_l6nl3waa_g5fyrqb9i83j8mbbabq5r" data-vl-sticky-dressed="true" style="top: 43px; left: 723px; width: 301px; transform: translate3d(0px, 0px, 0px);">
                                <h5 is="vl-side-navigation-h5" class="vl-side-navigation__title">Op deze pagina</h5>
                                <div is="vl-side-navigation-content" class="vl-side-navigation__content">
                                    <ul is="vl-side-navigation-group" class="vl-side-navigation__group">
                                        <li is="vl-side-navigation-item" data-vl-parent="" class="vl-side-navigation__item vl-side-navigation__item--parent">
                                            <a is="vl-side-navigation-toggle" href="#content-1" data-vl-child="content-1" class="vl-side-navigation__toggle" aria-expanded="false">
                                                content 1
                                                <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                            </a>
                                            <ul>
                                                <li is="vl-side-navigation-item" class="vl-side-navigation__item">
                                                    <div><a href="#content-1-1" data-vl-parent="content-1">content 1 - 1</a></div>
                                                </li>
                                                <li is="vl-side-navigation-item" class="vl-side-navigation__item">
                                                    <div><a href="#content-1-2" data-vl-parent="content-1">content 1 - 2</a></div>
                                                </li>
                                                <li is="vl-side-navigation-item" class="vl-side-navigation__item">
                                                    <div><a href="#content-1-3" data-vl-parent="content-1">content 1 - 3</a></div>
                                                </li>
                                                <li is="vl-side-navigation-item" class="vl-side-navigation__item">
                                                    <div><a href="#content-1-4" data-vl-parent="content-1">content 1 - 4</a></div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li is="vl-side-navigation-item" data-vl-parent="" class="vl-side-navigation__item vl-side-navigation__item--parent">
                                            <a is="vl-side-navigation-toggle" href="#content-2" data-vl-child="content-2" class="vl-side-navigation__toggle js-vl-scrollspy-active" aria-expanded="false">
                                                content 2
                                                <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                            </a>
                                        </li>
                                        <li is="vl-side-navigation-item" data-vl-parent="" class="vl-side-navigation__item vl-side-navigation__item--parent">
                                            <a is="vl-side-navigation-toggle" href="#content-3" data-vl-child="content-3" class="vl-side-navigation__toggle" aria-expanded="false">
                                                content 3
                                                <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                            </a>
                                            <ul>
                                                <li is="vl-side-navigation-item" class="vl-side-navigation__item">
                                                    <div><a href="#content-3-1" data-vl-parent="content-3">content 3 - 1</a></div>
                                                </li>
                                                <li is="vl-side-navigation-item" class="vl-side-navigation__item">
                                                    <div><a href="#content-3-2" data-vl-parent="content-3">content 3 - 2</a></div>
                                                </li>
                                                <li is="vl-side-navigation-item" class="vl-side-navigation__item">
                                                    <div><a href="#content-3-3" data-vl-parent="content-3">content 3 - 3</a></div>
                                                </li>
                                                <li is="vl-side-navigation-item" class="vl-side-navigation__item">
                                                    <div><a href="#content-3-4" data-vl-parent="content-3">content 3 - 4</a></div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            <div class="resize-sensor" style="position: absolute; inset: 0px; overflow: hidden; z-index: -1; visibility: hidden; opacity: 0;"><div class="resize-sensor-expand" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; opacity: 0;"><div style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 100000px; height: 100000px;"></div></div><div class="resize-sensor-shrink" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; opacity: 0;"><div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"></div></div></div></nav>
                            </div>
                            </div>
                            `;
    }
}

customElements.define('exhibit-side-navigation', SideNavigationElement);
