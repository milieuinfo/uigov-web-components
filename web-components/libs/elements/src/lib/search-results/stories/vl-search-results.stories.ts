import { html } from 'lit-html';
import '../vl-search-results.element';

export default {
    title: 'Elements/search-results',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const searchResultsDefault = () => html`
    <ul is="vl-search-results" data-cy="search-results">
        <li is="vl-search-result" data-cy="search-result-1">
            <a href="#">Vlaanderenkiest.be</a>
            <time>Maandag 22 oktober 2018</time>
            <dl>
                <dt>Vlaanderenkiest.be</dt>
                <dd>Verkiezingsresultaten op Vlaanderenkiest.be...</dd>
                <dt>Vlaanderen intern</dt>
                <dd>Werkt u bij de Vlaamse overheid...</dd>
            </dl>
        </li>
        <li is="vl-search-result" data-cy="search-result-2">
            <a href="#">Vlaanderenkiest.be</a>
            <time>Maandag 22 oktober 2018</time>
            <dl>
                <dt>Vlaanderenkiest.be</dt>
                <dd>Verkiezingsresultaten op Vlaanderenkiest.be...</dd>
                <dt>Vlaanderen intern</dt>
                <dd>Werkt u bij de Vlaamse overheid...</dd>
            </dl>
        </li>
    </ul>
`;
searchResultsDefault.storyName = 'vl-search-results - default';
