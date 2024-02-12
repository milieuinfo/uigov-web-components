import { FormControl } from './next/form-control';
import { VlUploadComponent } from './next/upload';

/**
 * Haalt de form data op van een form element en zet deze om naar een object.
 * Als een form control meerdere waarden kan hebben, dan wordt deze omgezet naar een array van waarden.
 * @param formElement
 * // multiFormControlNames: een array van form control names waarvoor een array van waarden moet worden aangemaakt
 * // optioneel, als deze parameter niet wordt meegegeven, dan wordt er gezocht naar alle form controls die meerdere waarden kunnen hebben
 * @param multiFormControlNames
 */
export const parseFormData = <T = { [key: string]: FormDataEntryValue[] | File | string }>(
    formElement: HTMLFormElement,
    multiFormControlNames?: string[]
): T | unknown => {
    if (!formElement) {
        return;
    }
    const data = new FormData(formElement);
    // alle form controls die een array van waarden moeten geven
    const allMultiFormControlKeys = multiFormControlNames
        ? multiFormControlNames
        : Array.from(formElement.querySelectorAll('*'))
              .filter(
                  (element) =>
                      (element instanceof FormControl && element.hasAttribute('multiple')) ||
                      element instanceof VlUploadComponent
              )
              .map((el) => el.getAttribute('name'));
    // als de form data voor een bepaalde key meerdere waarden bevat, dan wordt deze key in de data map vervangen door een array van waarden
    return Array.from(data.keys()).reduce((result, key) => {
        if (allMultiFormControlKeys.includes(key)) {
            const allValuesForKey = data.getAll(key);
            if (allValuesForKey.length === 1 && allValuesForKey[0] === '') {
                // native FormData.getAll() geeft een array terug met een lege string als de key niet gevonden wordt
                // in dit geval moet de key in de data map vervangen worden door een lege array
                return { ...result, [key]: [] };
            }
            return { ...result, [key]: allValuesForKey };
        } else {
            return { ...result, [key]: data.get(key) };
        }
    }, {});
};
