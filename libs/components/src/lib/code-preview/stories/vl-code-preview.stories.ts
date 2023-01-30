import { html } from 'lit-html';
import '../vl-code-preview.component';

export default {
    title: 'Components/code-preview',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const codePreviewDefault = () =>
    html` <vl-code-preview data-cy="code-preview">
        <h3>This is a title</h3>
        <h2>This is a subtitle</h2>
        <div>
            <div>
                <div>
                    <p>test</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam impedit dolor maxime incidunt eos
                    labore aut delectus, omnis repellat officia id dolores, magni velit beatae similique ex optio enim,
                    nulla.
                </p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </vl-code-preview>`;
codePreviewDefault.storyName = 'vl-code-preview - default';
