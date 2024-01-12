import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../vl-datepicker.component';
import { datepickerArgs, datepickerArgTypes } from './vl-datepicker.stories-arg';
import { story } from '@domg-wc/common-storybook';
import datepickerDocs from './vl-datepicker.stories-doc.mdx';

export default {
    title: 'Components/datepicker',
    tags: ['autodocs'],
    args: datepickerArgs,
    argTypes: datepickerArgTypes,
    parameters: {
        docs: {
            page: datepickerDocs,
        },
    },
    decorators: [(story: () => unknown) => html` <div style="height: 400px;">${story()}</div>`],
} as Meta<typeof datepickerArgs>;

const Template = story(
    datepickerArgs,
    ({
        type,
        format,
        visualFormat,
        selectedDate,
        minDate,
        maxDate,
        minTime,
        maxTime,
        amPm,
        success,
        error,
        value,
        pattern,
        name,
    }) => {
        return html` <vl-datepicker
            id="default-datepicker"
            data-vl-type=${type}
            ?data-vl-format=${format}
            ?data-vl-visual-format=${visualFormat}
            ?data-vl-selected-date=${selectedDate}
            ?data-vl-min-date=${minDate}
            ?data-vl-max-date=${maxDate}
            ?data-vl-min-time=${minTime}
            ?data-vl-max-time=${maxTime}
            ?data-vl-am-pm=${amPm}
            ?data-vl-error=${error}
            ?data-vl-success=${success}
            ?data-vl-value=${value}
            ?data-vl-pattern=${pattern}
            ?data-vl-name=${name}
            data-cy="datepicker"
        >
        </vl-datepicker>`;
    }
);
export const DatepickerDefault = Template.bind(datepickerArgs);
DatepickerDefault.storyName = 'vl-datepicker - default';
