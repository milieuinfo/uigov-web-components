export class GridElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Grid';
        this.innerHTML = `
            <style>
                .presentation__grid {
                    background: #aaa;
                }
                .presentation__grid__col {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 10rem;
                    background: #FFE615;
                    border-radius: .5rem;
                }
            </style>
            <div class="wrapper">
                <div class="container">
                    <div>
                        <h2 is="vl-h2" data-vl-alt>${title}</h2>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Region</h3>
                            <section is="vl-region" class="vl-region">
                                <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque eos est
                                eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel voluptas
                                voluptatibus?
                                </span>
                            </section>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Region alt</h3>
                            <section is="vl-region" data-vl-alt class="vl-region--alt vl-region--data-vl-alt vl-region">
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque eos est
                                    eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel voluptas
                                    voluptatibus?
                                </span>
                            </section>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Region overlap</h3>
                            <section is="vl-region" data-vl-overlap class="vl-region--overlap vl-region--data-vl-overlap vl-region">
                                <div is="vl-layout" class="vl-layout">
                                    <div is="vl-grid" class="vl-grid">
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque eos est
                                        eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel voluptas
                                        voluptatibus?
                                    </span>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Grid stacking</h3>
                            <div is="vl-grid" data-vl-is-stacked class="vl-grid--is-stacked vl-grid--data-vl-is-stacked vl-grid">
                                <div is="vl-column" data-vl-size="12" class="vl-col--12-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Stacked</p>
                                    </div>
                                </div>
                                <div is="vl-column" data-vl-size="12" class="vl-col--12-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Stacked</p>
                                    </div>
                                </div>
                                <div is="vl-column" data-vl-size="12" class="vl-col--12-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Stacked</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Grid stacking minder marge</h3>
                            <div is="vl-grid" data-vl-is-stacked-small class="vl-grid--is-stacked-small vl-grid--data-vl-is-stacked-small vl-grid">
                                <div is="vl-column" data-vl-size="12" class="vl-col--12-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Stacked met kleine marges</p>
                                    </div>
                                </div>
                                <div is="vl-column" data-vl-size="12" class="vl-col--12-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Stacked met kleine marges</p>
                                    </div>
                                </div>
                                <div is="vl-column" data-vl-size="12" class="vl-col--12-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Stacked met kleine marges</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Grid stacking meer marge</h3>
                            <div is="vl-grid" data-vl-is-stacked-large class="vl-grid--is-stacked-large vl-grid--data-vl-is-stacked-large vl-grid">
                                <div is="vl-column" data-vl-size="12" class="vl-col--12-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Stacked met grote marges</p>
                                    </div>
                                </div>
                                <div is="vl-column" data-vl-size="12" class="vl-col--12-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Stacked met grote marges</p>
                                    </div>
                                </div>
                                <div is="vl-column" data-vl-size="12" class="vl-col--12-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Stacked met grote marges</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Grid alignment horizontaal</h3>
                            <div is="vl-grid" data-vl-align-start class="vl-grid--align-start vl-grid--data-vl-align-start vl-grid">
                                <div is="vl-column" data-vl-size="6" class="vl-col--6-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Ik ben links gealigneerd, standaard gedrag.</p>
                                    </div>
                                </div>
                                </div>
                                <div is="vl-grid" data-vl-align-center class="vl-grid--align-center vl-grid--data-vl-align-center vl-grid">
                                <div is="vl-column" data-vl-size="6" class="vl-col--6-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Ik ben gecentreerd.</p>
                                    </div>
                                </div>
                                </div>
                                <div is="vl-grid" data-vl-align-end class="vl-grid--align-end vl-grid--data-vl-align-end vl-grid">
                                <div is="vl-column" data-vl-size="6" class="vl-col--6-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Ik ben rechts gealigneerd.</p>
                                    </div>
                                </div>
                                </div>
                                <div is="vl-grid" data-vl-align-space-between class="vl-grid--align-space-between vl-grid--data-vl-align-space-between vl-grid">
                                <div is="vl-column" data-vl-size="4" class="vl-col--4-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Er is zoveel mogelijk plaats tussen ons!</p>
                                    </div>
                                </div>
                                <div is="vl-column" data-vl-size="4" class="vl-col--4-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Er is zoveel mogelijk plaats tussen ons!</p>
                                    </div>
                                </div>
                                </div>
                                <div is="vl-grid" data-vl-align-space-around class="vl-grid--align-space-around vl-grid--data-vl-align-space-around vl-grid">
                                <div is="vl-column" data-vl-size="4" class="vl-col--4-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Er is zoveel mogelijk plaats rond ons!</p>
                                    </div>
                                </div>
                                <div is="vl-column" data-vl-size="4" class="vl-col--4-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Er is zoveel mogelijk plaats rond ons!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Grid alignment verticaal</h3>
                            <div class="presentation__grid" style="margin-bottom: 1rem;">
                                <div is="vl-grid" data-vl-v-top style="height: 5rem;" class="vl-grid--v-top vl-grid--data-vl-v-top vl-grid">
                                    <div is="vl-column" data-vl-size="1" data-vl-max-size="1" class="vl-col--1-1 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col" style="height: 3rem;">
                                        <p>Ik ben bovenaan gealigneerd, standaard gedrag.</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="presentation__grid" style="margin-bottom: 1rem;">
                                <div is="vl-grid" data-vl-v-center style="height: 5rem;" class="vl-grid--v-center vl-grid--data-vl-v-center vl-grid">
                                    <div is="vl-column" data-vl-size="1" data-vl-max-size="1" class="vl-col--1-1 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col" style="height: 3rem;">
                                        <p>Ik ben gecentreerd.</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="presentation__grid" style="margin-bottom: 1rem;">
                                <div is="vl-grid" data-vl-v-bottom style="height: 5rem;" class="vl-grid--v-bottom vl-grid--data-vl-v-bottom vl-grid">
                                    <div is="vl-column" data-vl-size="1" data-vl-max-size="1" class="vl-col--1-1 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col" style="height: 3rem;">
                                        <p>Ik ben onderaan gealigneerd.</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="presentation__grid">
                                <div is="vl-grid" data-vl-v-stretch style="height: 5rem;" class="vl-grid--v-stretch vl-grid--data-vl-v-stretch vl-grid">
                                    <div is="vl-column" data-vl-size="1" data-vl-max-size="1" class="vl-col--1-1 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col" style="height: 100%;">
                                        <p>Ik ben uitgerekt tot de volledige hoogte van de grid.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Grid columns 12/12</h3>
                            <div is="vl-grid" class="vl-grid">
                            <div is="vl-column" data-vl-size="12" class="vl-col--12-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                <div class="presentation__grid__col">
                                <p>12/12 breedte</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Grid columns 4/12</h3>
                            <div is="vl-grid" class="vl-grid">
                            <div is="vl-column" data-vl-size="4" class="vl-col--4-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                <div class="presentation__grid__col">
                                <p>4/12 breedte</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Grid columns 3/4 - 1/4</h3>
                            <div is="vl-grid" class="vl-grid">
                                <div is="vl-column" data-vl-size="3" data-vl-max-size="4" class="vl-col--3-4 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>3/4 breedte</p>
                                    </div>
                                </div>
                                <div is="vl-column" data-vl-size="1" data-vl-max-size="4" class="vl-col--1-4 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>1/4 breedte</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Grid pushing column</h3>
                            <div is="vl-grid" class="vl-grid">
                                <div is="vl-column" data-vl-size="4" data-vl-max-size="12" data-vl-push="1" class="vl-push--1-12 vl-col--4-12 vl-col--10-12--m vl-col--12-12--s vl-col--12-12--xs">
                                    <div class="presentation__grid__col">
                                    <p>Pushed met 1/12!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-grid', GridElement);
