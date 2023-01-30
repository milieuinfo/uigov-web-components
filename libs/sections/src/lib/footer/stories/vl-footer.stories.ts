import { html } from 'lit-html';
import '../vl-footer.section';
import { footerArgs, footerArgTypes } from './vl-footer.stories-arg';

export default {
    title: 'sections/footer',
    args: footerArgs,
    argTypes: footerArgTypes,
};

export const footerInBody = ({ identifier, development }: typeof footerArgs) => {
    return html` <div is="vl-body">
        <vl-footer data-cy="footer" data-vl-identifier=${identifier} ?data-vl-development=${development}></vl-footer>
    </div>`;
};
footerInBody.storyName = 'vl-footer - in body';
