import { html } from 'lit';
import { AccessibilityProperties } from '../vl-accessibility.model';

export type SideNavigationProps = Pick<AccessibilityProperties, 'compliance'>;

// export const sideNavigation = ({ compliance }: AccessibilityProperties) => {
export const sideNavigation = ({ compliance }: SideNavigationProps) => {
    return html` <div
        is="vl-column"
        data-vl-size="4"
        data-vl-medium-size="4"
        data-vl-small-size="4"
        data-vl-extra-small-size="0"
    >
        <nav is="vl-side-navigation" id="side-nav-accessibility" aria-label="inhoudsopgave">
            <h1 is="vl-side-navigation-h1">Op deze pagina</h1>
            <div is="vl-side-navigation-content">
                <ul is="vl-side-navigation-group">
                    <li is="vl-side-navigation-item" data-vl-parent>
                        <a is="vl-side-navigation-toggle" href="#compliance-status">
                            Nalevingsstatus
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                    </li>
                    <li
                        style=${compliance === 'FULLY_COMPLIANT' && 'display: none'}
                        is="vl-side-navigation-item"
                        data-vl-parent
                    >
                        <a is="vl-side-navigation-toggle" href="#inaccessible-content">
                            Niet-toegankelijke inhoud
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                    </li>
                    <li is="vl-side-navigation-item" data-vl-parent>
                        <a is="vl-side-navigation-toggle" href="#setup-accessibility-statement">
                            Opstelling van deze toegankelijkheidsverklaring
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                    </li>
                    <li is="vl-side-navigation-item" data-vl-parent>
                        <a is="vl-side-navigation-toggle" href="#feedback-contact">
                            Feedback en contactgegevens
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                    </li>
                    <li is="vl-side-navigation-item" data-vl-parent>
                        <a is="vl-side-navigation-toggle" href="#enforcement-procedure">
                            Handhavingsprocedure
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>`;
};
