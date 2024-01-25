import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { datepickerArgs, datepickerArgTypes } from './vl-datepicker.stories-arg';
import { story } from '@domg-wc/common-storybook';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { formatEpoch } from './vl-datepicker.stories-util';
import datepickerDocs from './vl-datepicker.stories-doc.mdx';
import { VlDatepickerComponent } from '../vl-datepicker.component';

registerWebComponents([VlDatepickerComponent]);

export default {
    title: 'Components-next/form/datepicker',
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

export const DatepickerDefault = story(
    datepickerArgs,
    ({
        id,
        type,
        format,
        minDate,
        maxDate,
        minTime,
        maxTime,
        amPm,
        success,
        block,
        disabled,
        error,
        readonly,
        required,
        value,
        label,
        pattern,
        name,
    }) => {
        return html`
            <div style="height: 400px;">
                <vl-datepicker-next
                    id=${id}
                    name=${name}
                    label=${label}
                    value=${value}
                    ?error=${error}
                    ?success=${success}
                    ?required=${required}
                    ?readonly=${readonly}
                    ?disabled=${disabled}
                    ?block=${block}
                    type=${type}
                    format=${format}
                    min-date=${formatEpoch(minDate, format)}
                    max-date=${formatEpoch(maxDate, format)}
                    min-time=${minTime}
                    max-time=${maxTime}
                    am-pm=${amPm}
                    pattern=${pattern}
                >
                </vl-datepicker-next>
            </div>
        `;
    }
);
DatepickerDefault.storyName = 'vl-datepicker-next - default';
