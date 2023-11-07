import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { datepickerArgs, datepickerArgTypes } from './vl-datepicker.stories-arg';
import { story } from '@domg-wc/common-storybook';
import { VlDatepickerComponent } from '../vl-datepicker.component';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { formatEpoch, formatTime } from '@domg-wc/components/next/form/datepicker/stories/vl-datepicker.stories-util';
import datepickerDocs from './vl-datepicker.stories-doc.mdx';
registerWebComponents([VlDatepickerComponent]);

export default {
    title: 'Components-next/form/datepicker',
    args: datepickerArgs,
    argTypes: datepickerArgTypes,
    parameters: {
        docs: {
            page: datepickerDocs,
        },
    },
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
        console.log(minTime, maxTime);
        console.log(formatTime(minTime), formatTime(maxTime));
        return html`
            <vl-datepicker-next
                type=${type}
                format=${format}
                visual-format=${visualFormat}
                selected-date=${formatEpoch(selectedDate, format)}
                min-date=${formatEpoch(minDate, format)}
                max-date=${formatEpoch(maxDate, format)}
                min-time=${minTime}
                max-time=${maxTime}
                am-pm=${amPm}
                block=${block}
                disabled=${disabled}
                error=${error}
                success=${success}
                readonly=${readonly}
                required=${required}
                label=${label}
                value=${value}
                pattern=${pattern}
                name=${name}
            >
            </vl-datepicker-next>
        `;
    }
);
export const DatepickerDefault = Template.bind(datepickerArgs);
DatepickerDefault.storyName = 'vl-datepicker-next - default';
