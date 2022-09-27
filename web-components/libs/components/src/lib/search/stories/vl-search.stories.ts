import { html } from 'lit-html';
import '../vl-search.component';

export default {
    title: 'Components/search',
};

// TODO Add options to the story.
export const searchDefault = () => html`
    <vl-search id="search-inline" data-vl-inline="" data-cy="search"></vl-search>
`;
searchDefault.storyName = 'vl-search - default';
