import { html } from 'lit-html';
import '../vl-side-navigation.element';
import '../vl-side-navigation-item.element';
import '../vl-side-navigation-group.element';
import '../vl-side-navigation-title.element';
import '../vl-side-navigation-toggle.element';
import '../vl-side-navigation-content.element';
import '../vl-side-navigation-reference.element';
import '../../title/vl-h1.element';
import '../../title/vl-h2.element';
import '../../title/vl-h3.element';
import '../../title/vl-h4.element';
import '../../title/vl-h5.element';
import '../../title/vl-h6.element';
import '../../grid/vl-grid.element';
import '../../grid/vl-column.element';
import '../../grid/vl-layout.element';
import '../../grid/vl-region.element';

export default {
    title: 'Elements/side-navigation',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const sideNavigationDefault = () => html`<section is="vl-region">
    <div is="vl-layout">
        <div is="vl-grid" data-vl-is-stacked>
            <div
                is="vl-column"
                data-vl-size="8"
                data-vl-medium-size="8"
                data-vl-small-size="8"
                data-vl-extra-small-size="12"
            >
                <div is="vl-side-navigation-reference" data-cy="side-navigation-reference">
                    <section id="content-1" is="vl-region">
                        <h2 is="vl-h2">content 1</h2>
                    </section>

                    <section id="content-1-1" is="vl-region">
                        <h3 is="vl-h3">content 1 - 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>

                    <section id="content-1-2" is="vl-region">
                        <h3 is="vl-h3">content 1 - 2</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>

                    <section id="content-1-3" is="vl-region">
                        <h3 is="vl-h3">content 1 - 3</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>

                    <section id="content-1-4" is="vl-region">
                        <h3 is="vl-h3">content 1 - 4</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>

                    <section id="content-2" is="vl-region">
                        <h2 is="vl-h2">content 2</h2>
                    </section>

                    <section id="content-3" is="vl-region">
                        <h2 is="vl-h2">content 3</h2>
                    </section>

                    <section id="content-3-1" is="vl-region">
                        <h3 is="vl-h3">content 3 - 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>

                    <section id="content-3-2" is="vl-region">
                        <h3 is="vl-h3">content 3 - 2</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>

                    <section id="content-3-3" is="vl-region">
                        <h3 is="vl-h3">content 3 - 3</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>

                    <section id="content-3-4" is="vl-region">
                        <h3 is="vl-h3">content 3 - 4</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>

                    <section is="vl-region">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                </div>
            </div>
            <div
                is="vl-column"
                data-vl-size="4"
                data-vl-medium-size="4"
                data-vl-small-size="4"
                data-vl-extra-small-size="0"
            >
                <nav is="vl-side-navigation" aria-label="inhoudsopgave" data-cy="side-navigation">
                    <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
                    <div is="vl-side-navigation-content">
                        <ul is="vl-side-navigation-group">
                            <li is="vl-side-navigation-item" data-vl-parent="content-1">
                                <a is="vl-side-navigation-toggle" href="#content-1" data-vl-child="content-1">
                                    content 1
                                    <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                </a>
                                <ul>
                                    <li is="vl-side-navigation-item">
                                        <div>
                                            <a href="#content-1-1" data-vl-parent="content-1">content 1 - 1</a>
                                        </div>
                                    </li>
                                    <li is="vl-side-navigation-item">
                                        <div>
                                            <a href="#content-1-2" data-vl-parent="content-1">content 1 - 2</a>
                                        </div>
                                    </li>
                                    <li is="vl-side-navigation-item">
                                        <div>
                                            <a href="#content-1-3" data-vl-parent="content-1">content 1 - 3</a>
                                        </div>
                                    </li>
                                    <li is="vl-side-navigation-item">
                                        <div>
                                            <a href="#content-1-4" data-vl-parent="content-1">content 1 - 4</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li is="vl-side-navigation-item" data-vl-parent="content-2">
                                <a is="vl-side-navigation-toggle" href="#content-2" data-vl-child="content-2">
                                    content 2
                                    <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                </a>
                            </li>
                            <li is="vl-side-navigation-item" data-vl-parent="content-3">
                                <a is="vl-side-navigation-toggle" href="#content-3" data-vl-child="content-3">
                                    content 3
                                    <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                </a>
                                <ul>
                                    <li is="vl-side-navigation-item">
                                        <div>
                                            <a href="#content-3-1" data-vl-parent="content-3">content 3 - 1</a>
                                        </div>
                                    </li>
                                    <li is="vl-side-navigation-item">
                                        <div>
                                            <a href="#content-3-2" data-vl-parent="content-3">content 3 - 2</a>
                                        </div>
                                    </li>
                                    <li is="vl-side-navigation-item">
                                        <div>
                                            <a href="#content-3-3" data-vl-parent="content-3">content 3 - 3</a>
                                        </div>
                                    </li>
                                    <li is="vl-side-navigation-item">
                                        <div>
                                            <a href="#content-3-4" data-vl-parent="content-3">content 3 - 4</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</section>`;
sideNavigationDefault.storyName = 'vl-side-navigation - default';
