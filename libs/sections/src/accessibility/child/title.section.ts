import { html } from 'lit';
import type { AccessibilityProperties } from '../vl-accessibility.model';
import {
    VlColumnElement,
    VlGridElement,
    VlH1Element,
    VlIntroductionElement,
    VlLayoutElement,
    VlRegionElement,
} from '@domg-wc/elements';
import { VlTypography } from '@domg-wc/components';

export type TitleProps = Pick<AccessibilityProperties, 'version' | 'date'>;

export const titleElements = () => [
    VlRegionElement,
    VlLayoutElement,
    VlGridElement,
    VlColumnElement,
    VlH1Element,
    VlIntroductionElement,
    VlTypography,
];

export const title = ({ version, date }: TitleProps) => html` <section is="vl-region">
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
