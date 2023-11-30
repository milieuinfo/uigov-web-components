import { story } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import '../vl-breadcrumb-item.component';
import '../vl-breadcrumb.component';
import { breadcrumbItemArgs, breadcrumbItemArgTypes } from './vl-breadcrumb.stories-arg';
import breadcrumbDoc from './vl-breadcrumb.stories-doc.mdx';

export default {
    title: 'Components/breadcrumb',
    tags: ['autodocs'],
    args: breadcrumbItemArgs,
    argTypes: breadcrumbItemArgTypes,
    parameters: {
        docs: {
            page: breadcrumbDoc,
        },
    },
} as Meta<typeof breadcrumbItemArgs>;

export const BreadcrumbDefault = story(
    breadcrumbItemArgs,
    ({ href1, href2, href3, href4 }) => html`
        <vl-breadcrumb>
            <vl-breadcrumb-item data-vl-href=${href1}>Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href=${href2}>Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href=${href3}>Webuniversum</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href=${href4}>Componenten</vl-breadcrumb-item>
        </vl-breadcrumb>
    `
);
BreadcrumbDefault.storyName = 'vl-breadcrumb - default';
BreadcrumbDefault.args = {
    href1: '#',
    href2: '#',
    href3: '#',
};
