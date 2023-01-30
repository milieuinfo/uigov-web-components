import { html } from 'lit-html';
import '../vl-info-tile.component';
import { infoTileArgs, infoTileArgTypes } from './vl-info-tile.stories-arg';

export default {
    title: 'Components/info-tile',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: infoTileArgs,
    argTypes: infoTileArgTypes,
};

export const infoTileDefault = ({
    toggleable,
    autoOpen,
    titleSlotText,
    subtitleSlotText,
    contentSlotText,
}: typeof infoTileArgs) => html` <vl-info-tile
    ?data-vl-toggleable=${toggleable}
    ?data-vl-auto-open=${autoOpen}
    data-cy="info-tile"
    ><span slot="title">${titleSlotText}</span>
    <span slot="subtitle">${subtitleSlotText}</span>
    <div slot="content">${contentSlotText}</div>
</vl-info-tile>`;
infoTileDefault.storyName = 'vl-info-tile - default';
