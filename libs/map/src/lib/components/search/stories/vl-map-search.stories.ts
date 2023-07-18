import { html } from 'lit-html';
import { Meta, StoryFn } from '@storybook/web-components';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../vl-map-search';
import { mapSearchArgs, mapSearchArgTypes } from './vl-map-search.stories-arg';
import { filterOutClasses, formatHTML, setDefaultArgsToNothing } from '@domg-wc/common-storybook';
import mapSearchDoc from './vl-map-search.stories-doc.mdx';

export default {
    title: 'map/search',
    args: mapSearchArgs,
    argTypes: mapSearchArgTypes,
    parameters: {
        docs: {
            page: mapSearchDoc,
            transformSource: (input: string) => formatHTML(filterOutClasses(input)),
        },
    },
} as Meta<typeof mapSearchArgs>;

export const MapSearchDefault: StoryFn<typeof mapSearchArgs> = (args) => {
    const { placeholder, searchEmptyText, searchNoResultsText, searchPlaceholder, withOffset } =
        setDefaultArgsToNothing(args, mapSearchArgs);

    return html`
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
    `;
};
MapSearchDefault.storyName = 'vl-map-search - default';

export const MapSearchOutsideMap: StoryFn<typeof mapSearchArgs> = (args) => {
    const { placeholder, searchEmptyText, searchNoResultsText, searchPlaceholder } = setDefaultArgsToNothing(
        args,
        mapSearchArgs
    );

    return html`
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
    `;
};
MapSearchOutsideMap.storyName = 'vl-map-search - outside map';
