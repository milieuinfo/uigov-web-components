import { html } from 'lit';
import '../vl-breadcrumb.component';
import '../vl-breadcrumb-item.component';
import { breadcrumbItemArgs, breadcrumbItemArgTypes } from './vl-breadcrumb.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';
import breadcrumbDoc from './vl-breadcrumb.stories-doc.mdx';
import { setDefaultArgsToNothing } from '@domg-wc/common-storybook';

export default {
    title: 'Components/breadcrumb',
    args: breadcrumbItemArgs,
    argTypes: breadcrumbItemArgTypes,
    parameters: {
        docs: {
            page: breadcrumbDoc,
        },
    },
} as Meta<typeof breadcrumbItemArgs>;

export const BreadcrumbDefault: StoryFn<typeof breadcrumbItemArgs> = (args) => {
    const { href1, href2, href3, href4 } = setDefaultArgsToNothing(args, breadcrumbItemArgs);

    return html`
        <vl-breadcrumb>
            <vl-breadcrumb-item data-vl-href=${href1}>Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href=${href2}>Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href=${href3}>Webuniversum</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href=${href4}>Componenten</vl-breadcrumb-item>
        </vl-breadcrumb>
    `;
};
BreadcrumbDefault.storyName = 'vl-breadcrumb - default';
BreadcrumbDefault.args = {
    href1: '#',
    href2: '#',
    href3: '#',
};
