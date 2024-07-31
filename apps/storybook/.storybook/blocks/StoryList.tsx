import React from 'react';
// import { Canvas, Story } from '@storybook/addon-docs';
import { Canvas, Story, Meta } from '@storybook/blocks';
import { TemplateResult } from 'lit';
import { html } from 'lit-html';
import { StoryFn } from '@storybook/web-components';

export interface StoryData {
    name: string;
    storyTemplate?: TemplateResult;
}

/**
 * StoryList component
 * werking: Toont een lijst van stories
 * @param of
 * @param storyList
 * @constructor
 */
export const StoryList = ({ storyList, template }: { storyList: StoryData[]; template: TemplateResult }) => {
    return (
        <div>
            {storyList.map(({ name, storyTemplate }, index) => {
                const story: StoryFn = html`<button>${name}</button>` as unknown as StoryFn;
                return (
                    <div key={index}>
                        <h3>{name}</h3>

                        <Canvas of={story}>
                            <Meta of={[story]} />
                        </Canvas>
                    </div>
                );
            })}
        </div>
    );
};
