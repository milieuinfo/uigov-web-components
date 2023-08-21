import { html } from 'lit-html';
import '../vl-icon.element';
import '../vl-icon-wrapper.element';

export default {
    title: 'Elements/icon',
    args: {
        wrappersAmount: 3,
    },
    argTypes: {
        wrappersAmount: {
            name: 'amount of wrappers (for demo purposes)',
            control: { type: 'range', min: 1, max: 12, step: 1 },
        },
    },
};

interface IconWrapperArgs {
    wrappersAmount: number;
}

export const iconWrapperDefault = ({ wrappersAmount }: IconWrapperArgs) => {
    const wrappers = [null, ...new Array(wrappersAmount - 1)];
    return html`${wrappers.map(
        () =>
            html`<p is="vl-icon-wrapper">
                <span is="vl-icon" data-vl-icon="calendar"></span>
            </p>`
    )}`;
};
iconWrapperDefault.storyName = 'vl-icon-wrapper - default';
