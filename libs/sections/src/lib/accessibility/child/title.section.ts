import { html } from 'lit';

export const title = ({ version, date }: { version: string; date: string }) => html` <section is="vl-region">
    <div is="vl-layout">
        <div is="vl-grid" data-vl-is-stacked>
            <div is="vl-column" data-vl-size="10">
                <h1 is="vl-h1" data-vl-no-space-bottom>Toegankelijkheidsverklaring</h1>
            </div>
            <div is="vl-column" data-vl-size="10">
                <p is="vl-introduction">
                    <span>Versie ${version} - ${date}</span>
                </p>
            </div>
            <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                <vl-typography>
                    <hr />
                </vl-typography>
            </div>
        </div>
    </div>
</section>`;
