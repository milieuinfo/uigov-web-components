import { html, nothing } from 'lit-html';
import '../vl-tabs.component';
import { Meta, StoryFn } from '@storybook/web-components';
import { tabsArgs, tabsArgTypes } from './vl-tabs.stories-arg';

export default {
    title: 'Components/tabs',
    args: tabsArgs,
    argTypes: tabsArgTypes,
} as Meta<typeof tabsArgs>;

export const tabsDefault: StoryFn<typeof tabsArgs> = ({
    activeTab,
    alt,
    disableLinks,
    responsiveLabel,
    onChangeActiveTab,
}) => html`
    <vl-tabs
        data-vl-active-tab=${activeTab || nothing}
        ?data-vl-alt=${alt}
        ?data-vl-responsive-label=${responsiveLabel}
        ?data-vl-disable-links=${disableLinks}
        @change=${(event: CustomEvent) => onChangeActiveTab(event.detail)}
    >
        <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein">
            Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet.
        </vl-tabs-pane>
        <vl-tabs-pane data-vl-id="metro" data-vl-title="Metro, tram en bus">
            Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
            malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
        </vl-tabs-pane>
        <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu
            leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </vl-tabs-pane>
    </vl-tabs>
`;
tabsDefault.storyName = 'vl-tabs - default';

export const tabsReactive: StoryFn<typeof tabsArgs> = ({
    activeTab,
    alt,
    disableLinks,
    responsiveLabel,
    onChangeActiveTab,
}) =>
    html`
        <button is="vl-button" onclick="addPane()">Pane toevoegen</button>
        <vl-tabs
            id="tabs"
            data-vl-active-tab=${activeTab || nothing}
            ?data-vl-alt=${alt}
            ?data-vl-responsive-label=${responsiveLabel}
            ?data-vl-disable-links=${disableLinks}
            @change=${(event: CustomEvent) => onChangeActiveTab(event.detail)}
        >
            <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein">
                Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
                porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </vl-tabs-pane>
            <vl-tabs-pane data-vl-id="metro" data-vl-title="Metro, tram en bus">
                Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
                malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
            </vl-tabs-pane>
        </vl-tabs>
        <script>
            let index = 0;
            const addPane = () => {
                const div = document.createElement('div');
                div.innerHTML =
                    '<vl-tabs-pane data-vl-id="fiets-' +
                    index +
                    '" data-vl-title="Fiets ' +
                    index +
                    '">TEST ' +
                    index +
                    '</vl-tabs-pane>';
                document.getElementById('tabs').appendChild(div.firstElementChild);
                index++;
            };
        </script>
    `;
tabsReactive.storyName = 'vl-tabs - reactive';
