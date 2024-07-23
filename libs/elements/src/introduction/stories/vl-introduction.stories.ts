import { html } from 'lit-html';
import '../vl-introduction.element';
import introductionDoc from './vl-introduction.stories-doc.mdx';
export default {
    id: 'Elements/introduction',
    title: 'Elements/introduction [deprecated]',
    tags: ['autodocs'],
    parameters: {
        controls: { hideNoControlsWarning: true },
        docs: { page: introductionDoc },
    },
    args: {
        content:
            'Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
    },
    argTypes: { content: { name: 'content (for demo purposes)' } },
};

interface IntroductionArgs {
    content: any;
}

export const IntroductionDefault = ({ content }: IntroductionArgs) => html`<p
    is="vl-introduction"
    data-cy="introduction"
>
    ${content}
</p>`;
IntroductionDefault.storyName = 'vl-introduction - default';
