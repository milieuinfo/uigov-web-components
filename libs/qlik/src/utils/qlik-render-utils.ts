import { repeat } from 'lit/directives/repeat.js';
import { html } from 'lit';
import { BindSelectConfig } from './vl-qlik.model';

const hasTemplate = (c) => c.template;
export const renderStack = (...columns) => {
    const filteredColumns = columns.filter(hasTemplate);
    if (filteredColumns.length === 0) {
        return html``;
    }
    return html` <div is="vl-grid" data-vl-is-stacked>
        ${repeat(
            filteredColumns,
            (fc) => fc.id || '',
            (c) => renderColumn(c)
        )}
    </div>`;
};

export const renderColumn = ({
    push = 0,
    // watch devices
    extraSmallSize = 12,
    extraSmallMaxSize = 12,

    // phone devices
    smallSize = extraSmallSize,
    smallMaxSize = extraSmallMaxSize,

    // tablet devices
    mediumSize = smallSize,
    mediumMaxSize = smallMaxSize,

    // desktop devices
    size = mediumSize,
    maxSize = mediumMaxSize,

    // the template we want to render
    template = html``,
} = {}) => {
    return html` <div
        is="vl-column"
        data-vl-push="${push}"
        data-vl-size="${size}"
        data-vl-max-size="${maxSize}"
        data-vl-medium-size="${mediumSize}"
        data-vl-medium-max-size="${mediumMaxSize}"
        data-vl-small-size="${smallSize}"
        data-vl-small-max-size="${smallMaxSize}"
        data-vl-extra-small-size="${extraSmallSize}"
        data-vl-extra-small-max-size="${extraSmallMaxSize}"
    >
        ${template}
    </div>`;
};

export const bindVlSelect = ({ component, choices, selectedChoices, sortFilter, placeholder }: BindSelectConfig) => {
    setTimeout(() => {
        component.ready().then(() => {
            if (sortFilter) {
                component.sortFilter = sortFilter;
            }
            if (placeholder) {
                choices.push({ label: placeholder, value: '', placeholder: true, selected: true });
            }
            if (selectedChoices) {
                choices.forEach((c) => (c.selected = selectedChoices.some((sc) => sc === c.value)));
            }
            component._choices.removeActiveItems();
            component.choices = choices;
        });
    }, 0);
};

export const queryById = (component) => (id) => {
    return queryBySelector(component)(`#${id}`);
};

export const queryBySelector = (component) => (id) => {
    if (!component.shadowRoot) {
        return component.querySelector(id);
    }
    return component.shadowRoot.querySelector(id);
};

export const queryBySelectorAll = (component) => (id) => {
    if (!component.shadowRoot) {
        return component.querySelectorAll(id);
    }
    return component.shadowRoot.querySelectorAll(id);
};

export const debounce = ({ func, delay = 100, context }) => {
    let timerId;
    return (...args) => {
        const boundFunc = func.bind(context, ...args);
        clearTimeout(timerId);
        timerId = setTimeout(boundFunc, delay);
    };
};

export const comparingWithFunction = (fn) => (a, b) => {
    const fa = fn(a);
    const fb = fn(b);
    return fa === fb ? 0 : fa < fb ? -1 : 1;
};

export const performWithLoader = (button, action) => {
    (async () => {
        button.setAttribute('disabled', '');
        button.setAttribute('loading', '');
        await action();
    })()
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
        })
        .finally(() => {
            button.removeAttribute('disabled', '');
            button.removeAttribute('loading', '');
        });
};
