import { html, nothing } from 'lit-html';
import '../vl-header.section';
import { headerArgs, headerArgTypes } from './vl-header.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';
import headerDoc from './vl-header.stories-doc.mdx';

export default {
    title: 'sections/header',
    args: headerArgs,
    argTypes: headerArgTypes,
    parameters: {
        docs: { page: headerDoc },
        layout: 'fullscreen',
    },
} as Meta<typeof headerArgs>;

const Template: StoryFn<typeof headerArgs> = ({
    authenticatedUserUrl,
    development,
    identifier,
    loginRedirectUrl,
    loginUrl,
    logoutUrl,
    simple,
    switchCapacityUrl,
    onReady,
}) => html`
    <div is="vl-body">
        <vl-header
            data-vl-authenticated-user-url=${authenticatedUserUrl || nothing}
            ?data-vl-development=${development}
            data-vl-identifier=${identifier || nothing}
            data-vl-login-redirect-url=${loginRedirectUrl || nothing}
            data-vl-login-url=${loginUrl || nothing}
            data-vl-logout-url=${logoutUrl || nothing}
            ?data-vl-simple=${simple}
            data-vl-switch-capacity-url=${switchCapacityUrl || nothing}
            @ready=${(event: CustomEvent) => {
                onReady(event);
                /* 
                    Digitaal Vlaanderen zet position 'fixed' op de vlw__header class zodat de header altijd vanboven aan de pagina afgebeeld wordt.
                    Dit zorgt ervoor dat de header op de docs pagina ook vanboven aan de pagina afgebeeld wordt ipv in de story block.
                    Zet de position van vlw__header op 'relative' en de display van vlw__js_placeholder op 'none' om de header correct af te beelden.
                    Aangezien Lit de events uit de HTML code haalt, wordt dit stuk code niet afgebeeld bij de source op de docs pagina.
                */
                const vlwHeader = document.querySelector('div[class=vlw__header]') as HTMLElement;
                const vlwHeaderPlaceholder = document.querySelector('div[class=vlw__js-placeholder]') as HTMLElement;

                if (vlwHeader) {
                    vlwHeader.style.position = 'relative';
                }

                if (vlwHeaderPlaceholder) {
                    vlwHeaderPlaceholder.style.display = 'none';
                }
            }}
        ></vl-header>
    </div>
`;

export const HeaderDefault = Template.bind({});
HeaderDefault.storyName = 'vl-header - default';