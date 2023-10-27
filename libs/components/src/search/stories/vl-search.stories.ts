import { html } from 'lit-html';
import '../vl-search.component';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';

export default {
    title: 'Components/search',
    tags: ['autodocs'],
    args: storyArgs({}),
    argTypes: storyArgTypes({}),
} as Meta;

// TODO Add options to the story.
export const searchDefault = story(
    {},
    () => html` <vl-search id="search-inline" data-vl-inline="" data-cy="search"></vl-search> `
);
searchDefault.storyName = 'vl-search - default';
