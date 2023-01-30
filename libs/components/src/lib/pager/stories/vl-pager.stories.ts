import { html } from 'lit-html';
import '../vl-pager.component';
import { pagerArgs, pagerArgTypes } from './vl-pager.stories-arg';

export default {
    title: 'Components/pager',
    args: pagerArgs,
    argTypes: pagerArgTypes,
};

const pagerTemplate = ({
    totalItems,
    itemsPerPage,
    currentPage,
    paginationDisabled,
    alignCenter,
    alignRight,
    change,
}: typeof pagerArgs) => html`
    <vl-pager
        data-vl-total-items=${totalItems}
        data-vl-items-per-page=${itemsPerPage}
        data-vl-current-page=${currentPage}
        ?data-vl-pagination-disabled=${paginationDisabled}
        ?data-vl-align-center=${alignCenter}
        ?data-vl-align-right=${alignRight}
        @change=${(event: any) => change(event.detail)}
        data-cy="pager"
    ></vl-pager>
`;

export const pagerDefault = pagerTemplate.bind({}) as any;
pagerDefault.storyName = 'vl-pager - default';

export const pagerSinglePage = pagerTemplate.bind({}) as any;
pagerSinglePage.storyName = 'vl-pager - single page';
pagerSinglePage.args = {
    totalItems: 10,
    itemsPerPage: 10,
    currentPage: 1,
    paginationDisabled: false,
};

export const pagerWithoutPageItems = pagerTemplate.bind({}) as any;
pagerWithoutPageItems.storyName = 'vl-pager - without page items';
pagerWithoutPageItems.args = {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    paginationDisabled: true,
};
