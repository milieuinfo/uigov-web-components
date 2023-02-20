import { html } from 'lit-html';
import '../vl-tabs.component';
import { tabsArgs, tabsArgTypes } from './vl-tabs.stories-arg';

export default {
    title: 'Components/tabs',
    args: tabsArgs,
    argTypes: tabsArgTypes,
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const tabsDefault = ({ alt, responsiveLabel }: typeof tabsArgs) => html`
    <vl-tabs data-cy="tabs" ?data-vl-alt=${alt} ?data-vl-responsive-label=${responsiveLabel}>
        <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein" data-cy="tab-pane-1">
            Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet.
        </vl-tabs-pane>
        <vl-tabs-pane data-vl-id="metro-tram-bus" data-vl-title="Metro, tram en bus" data-cy="tab-pane-2">
            Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
            malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
        </vl-tabs-pane>
        <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets" data-cy="tab-pane-3">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu
            leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </vl-tabs-pane>
    </vl-tabs>
`;
tabsDefault.storyName = 'vl-tabs - default';

export const tabsReactive = ({ alt, responsiveLabel }: typeof tabsArgs) =>
    html`
        <button is="vl-button" onclick="addPane()">Pane toevoegen</button>
        <vl-tabs id="tabs" ?data-vl-alt=${alt} ?data-vl-responsive-label=${responsiveLabel}>
            <vl-tabs-pane data-vl-id="metro-tram-bus" data-vl-title="Metro, tram en bus">
                Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
                malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
            </vl-tabs-pane>
            <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean
                eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            </vl-tabs-pane>
        </vl-tabs>
        <script>
            let index = 0;
            const addPane = () => {
                const div = document.createElement('div');
                div.innerHTML =
                    '<vl-tabs-pane data-vl-id="trein-' +
                    index +
                    '" data-vl-title="Trein ' +
                    index +
                    '">TEST ' +
                    index +
                    '</vl-tabs-pane>';
                document.getElementById('tabs').appendChild(div.firstElementChild);
            };
        </script>
    `;
tabsReactive.storyName = 'vl-tabs - reactive';
