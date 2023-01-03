import { html } from 'lit';
import '../vl-breadcrumb.component';
import '../vl-breadcrumb-item.component';
import { breadcrumbItemArgs, breadcrumbItemArgTypes } from './vl-breadcrumb.stories-arg';

export default {
    title: 'Components/breadcrumb',
    args: breadcrumbItemArgs,
    argTypes: breadcrumbItemArgTypes,
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const breadcrumbDefault = ({href1, href2, href3, href4}: typeof breadcrumbItemArgs) => html`
  <vl-breadcrumb data-cy="breadcrumb">
    <vl-breadcrumb-item id="breadCrumbItem1" data-vl-href=${href1}>Vlaanderen Intern</vl-breadcrumb-item>
    <vl-breadcrumb-item data-vl-href=${href2}>Regelgeving</vl-breadcrumb-item>
    <vl-breadcrumb-item data-vl-href=${href3}>Webuniversum</vl-breadcrumb-item>
    <vl-breadcrumb-item data-vl-href=${href4}>Componenten</vl-breadcrumb-item>
  </vl-breadcrumb>
`;
breadcrumbDefault.storyName = 'vl-breadcrumb - default';
