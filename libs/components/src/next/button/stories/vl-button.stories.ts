import { story } from '@domg-wc/common-storybook';
import { buttonArgs, buttonArgTypes } from './vl-button.stories-arg';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { VlButtonComponent } from '../vl-button.component';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import buttonDoc from './vl-button.stories-doc.mdx';

registerWebComponents([VlButtonComponent]);

export default {
    title: 'Components-next/button',
    tags: ['autodocs'],
    args: buttonArgs,
    argTypes: buttonArgTypes,
    parameters: {
        docs: {
            page: buttonDoc,
        },
    },
} as Meta<typeof buttonArgs>;

const ButtonTemplate = story(
    buttonArgs,
    ({
        type,
        disabled,
        error,
        block,
        large,
        wide,
        narrow,
        secondary,
        tertiary,
        loading,
        toggle,
        on,
        controlled,
        defaultSlot,
        onVlClick,
        onVlToggle,
    }) => html`
        <vl-button-next
            type=${type}
            ?disabled=${disabled}
            ?error=${error}
            ?block=${block}
            ?large=${large}
            ?wide=${wide}
            ?narrow=${narrow}
            ?secondary=${secondary}
            ?tertiary=${tertiary}
            ?loading=${loading}
            ?toggle=${toggle}
            ?on=${on}
            ?controlled=${controlled}
            @vl-click=${onVlClick}
            @vl-toggle=${onVlToggle}
        >
            ${unsafeHTML(defaultSlot)}
        </vl-button-next>
    `
);

export const ButtonPrimary = ButtonTemplate.bind({});
ButtonPrimary.storyName = 'vl-button-next - primary';
ButtonPrimary.args = {
    defaultSlot: 'Klik op mij',
};

export const ButtonSecondary = ButtonTemplate.bind({});
ButtonSecondary.storyName = 'vl-button-next - secondary';
ButtonSecondary.args = {
    defaultSlot: 'Klik op mij',
    secondary: true,
};

export const ButtonTertiary = ButtonTemplate.bind({});
ButtonTertiary.storyName = 'vl-button-next - tertiary';
ButtonTertiary.args = {
    defaultSlot: 'Klik op mij',
    tertiary: true,
};

export const ButtonDisabled = ButtonTemplate.bind({});
ButtonDisabled.storyName = 'vl-button-next - disabled';
ButtonDisabled.args = {
    defaultSlot: 'Klik op mij',
    disabled: true,
};

export const ButtonError = ButtonTemplate.bind({});
ButtonError.storyName = 'vl-button-next - error';
ButtonError.args = {
    defaultSlot: 'Klik op mij',
    error: true,
};

export const ButtonBlock = ButtonTemplate.bind({});
ButtonBlock.storyName = 'vl-button-next - block';
ButtonBlock.args = {
    defaultSlot: 'Klik op mij',
    block: true,
};

export const ButtonLarge = ButtonTemplate.bind({});
ButtonLarge.storyName = 'vl-button-next - large';
ButtonLarge.args = {
    defaultSlot: 'Klik op mij',
    large: true,
};

export const ButtonWide = ButtonTemplate.bind({});
ButtonWide.storyName = 'vl-button-next - wide';
ButtonWide.args = {
    defaultSlot: 'Klik op mij',
    wide: true,
};

export const ButtonNarrow = ButtonTemplate.bind({});
ButtonNarrow.storyName = 'vl-button-next - narrow';
ButtonNarrow.args = {
    defaultSlot: 'Klik op mij',
    narrow: true,
};

export const ButtonLoading = ButtonTemplate.bind({});
ButtonLoading.storyName = 'vl-button-next - loading';
ButtonLoading.args = {
    defaultSlot: 'Klik op mij',
    loading: true,
};

export const ButtonToggle = ButtonTemplate.bind({});
ButtonToggle.storyName = 'vl-button-next - toggle';
ButtonToggle.args = {
    defaultSlot: 'Klik op mij',
    toggle: true,
};
