import { story } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../vl-map-search';
import { mapSearchArgs, mapSearchArgTypes } from './vl-map-search.stories-arg';
import mapSearchDoc from './vl-map-search.stories-doc.mdx';

export default {
    id: 'map-search',
    title: 'map/search',
    tags: ['autodocs'],
    args: mapSearchArgs,
    argTypes: mapSearchArgTypes,
    parameters: {
        docs: {
            page: mapSearchDoc,
        },
    },
} as Meta<typeof mapSearchArgs>;

export const MapSearchDefault = story(
    mapSearchArgs,
    ({ placeholder, searchEmptyText, searchNoResultsText, searchPlaceholder, withOffset }) =>
        html`
            <vl-map>
                <vl-map-search
                    data-vl-placeholder=${placeholder}
                    data-vl-search-empty-text=${searchEmptyText}
                    data-vl-search-no-results-text=${searchNoResultsText}
                    data-vl-search-placeholder=${searchPlaceholder}
                    ?data-vl-with-offset=${withOffset}
                ></vl-map-search>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            </vl-map>
        `
);
MapSearchDefault.storyName = 'vl-map-search - default';

export const MapSearchOutsideMap = story(
    mapSearchArgs,
    ({ placeholder, searchEmptyText, searchNoResultsText, searchPlaceholder }) => html`
        <vl-map-search
            data-vl-placeholder=${placeholder}
            data-vl-search-empty-text=${searchEmptyText}
            data-vl-search-no-results-text=${searchNoResultsText}
            data-vl-search-placeholder=${searchPlaceholder}
        ></vl-map-search>
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
        <script>
            document.querySelector('vl-map-search').bindMap(document.querySelector('vl-map'));
        </script>
    `
);
MapSearchOutsideMap.storyName = 'vl-map-search - outside map';
