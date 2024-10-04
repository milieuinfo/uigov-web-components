import { FormControl } from '../next/form-control';
import { SelectOption, VlSelectComponent } from '../next/select';
import { VlSelectRichComponent } from '../next/select-rich';
import { VlCheckboxComponent } from '../next/checkbox';
import { VlRadioComponent } from '../next/radio-group';
import { VlUploadComponent } from '../next/upload';

/**
 * Haalt de form data op van een form element en zet deze om naar een object.
 * Als een form control meerdere waarden kan hebben, dan wordt deze omgezet naar een array van waarden.
 * @param formElement
 * multiFormControlNames: een array van form control names waarvoor een array van waarden moet worden aangemaakt
 * optioneel, als deze parameter niet wordt meegegeven, dan wordt er gezocht naar alle form controls die meerdere waarden kunnen hebben
 * meer specifiek, form controls waarvan:
 *  - het name attribuut meerdere keren voorkomt
 *  - het multiple attribuut aanwezig is
 * @param multiFormControlNames
 */
export const parseFormData = <T = { [key: string]: FormDataEntryValue[] | File | string }>(
    formElement: HTMLFormElement,
    multiFormControlNames?: string[]
): T | null => {
    if (!formElement) {
        return null;
    }
    const data = new FormData(formElement);
    // alle form controls die een array van waarden moeten geven
    // Form controls met dezelfde name attribuut worden samengevoegd in een array
    const duplicateNames = Array.from(formElement.elements)
        .filter((element) => element.hasAttribute('name'))
        .map((el) => el.getAttribute('name'))
        .filter((name, index, names) => names.indexOf(name) !== index);
    const multipleFormControlKeys = Array.from(formElement.elements)
        .filter((element) => element.hasAttribute('multiple'))
        .map((el) => el.getAttribute('name'));
    const multipleValueFormControls = multiFormControlNames
        ? multiFormControlNames
        : Array.from(new Set([...duplicateNames, ...multipleFormControlKeys]));
    // als de form data voor een bepaalde key meerdere waarden bevat, dan wordt deze key in de data map vervangen door een array van waarden
    return Array.from(data.keys()).reduce(
        (result, key) => ({
            ...result,
            [key]: multipleValueFormControls.includes(key) ? data.getAll(key) : data.get(key),
        }),
        <T>{}
    );
};

/**
 * Vult de form controls van de gegeven form in met de meegegeven data.
 * @param formElement
 * @param data
 */
export const setFormData = (
    formElement: HTMLFormElement,
    data: { [p: string]: FormDataEntryValue[] | File | string }
) => {
    if (!formElement) {
        return;
    }
    const partition = <T>(array: T[], predicate: (item: T) => boolean): [T[], T[]] => {
        return array.reduce(
            (acc, item) => {
                if (predicate(item)) {
                    acc[0].push(item);
                } else {
                    acc[1].push(item);
                }
                return acc;
            },
            [[] as T[], [] as T[]]
        );
    };
    Object.entries(data).forEach(([key, value]) => {
        const formControl = formElement.elements.namedItem(key);
        if (!formControl) {
            return;
        }
        if (formControl instanceof HTMLInputElement && formControl.type === 'text') {
            formControl.value = value as string;
        } else if (formControl instanceof HTMLSelectElement) {
            formControl.value = value as string;
        } else if (formControl instanceof HTMLInputElement && formControl.type === 'checkbox') {
            formControl.checked = true;
            formControl.value = value as string;
        } else if (formControl instanceof HTMLInputElement && formControl.type === 'file') {
            const list = new DataTransfer();
            if (Array.isArray(value)) {
                value.forEach((file) => {
                    list.items.add(file as File);
                });
                formControl.files = list.files;
            } else if (value instanceof File) {
                list.items.add(value as File);
                formControl.files = list.files;
            }
        } else if (formControl instanceof RadioNodeList) {
            Array.from(formControl).forEach((radioNode) => {
                if (radioNode instanceof HTMLInputElement && radioNode.value === value && !radioNode.checked) {
                    if (radioNode.getAttribute('value') === value) {
                        radioNode.checked = true;
                    }
                } else if (radioNode instanceof FormControl) {
                    if (radioNode.getAttribute('value') === value) {
                        radioNode.setAttribute('checked', '');
                    }
                }
            });
            if (Array.isArray(value) && value.length) {
                value.forEach((val) => {
                    Array.from(formControl).forEach((radioNode) => {
                        if (
                            (radioNode instanceof VlCheckboxComponent || radioNode instanceof VlRadioComponent) &&
                            radioNode.getAttribute('value') === val
                        ) {
                            radioNode.setAttribute('checked', '');
                        }
                    });
                });
            }
        } else if (formControl instanceof FormControl) {
            const isSelect = formControl.validationTarget instanceof HTMLSelectElement;
            const isCheckbox =
                formControl.validationTarget instanceof HTMLInputElement &&
                formControl.validationTarget.type === 'checkbox';
            const isUpload =
                formControl.validationTarget instanceof HTMLInputElement &&
                formControl.validationTarget.type === 'file';
            if (isSelect && Array.isArray(value) && value.length) {
                const select = <VlSelectComponent | VlSelectRichComponent>formControl;
                const [filteredOptions, selectedOptions] = partition(
                    <SelectOption[]>select.options,
                    (selectOption) => value.indexOf(selectOption.value) > -1
                );
                select.options = [
                    ...filteredOptions,
                    ...selectedOptions.map((option) => ({ ...option, selected: true })),
                ];
            } else if (isCheckbox && typeof value === 'string') {
                formControl.setAttribute('checked', '');
            } else if (isUpload) {
                const upload = <VlUploadComponent>formControl;
                if (Array.isArray(value)) {
                    value.forEach((file) => file instanceof File && upload.addFile(file));
                } else if (value instanceof File) {
                    upload.addFile(value);
                }
            } else {
                formControl.setAttribute('value', <string>value);
            }
        }
    });
};
