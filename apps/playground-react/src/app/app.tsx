import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { VlInputFieldComponent } from '@domg-wc/components/next/form/input-field';
import { VlErrorMessageComponent } from '@domg-wc/components/next/form/error-message';
import { VlTextareaComponent } from '@domg-wc/components/next/form/textarea';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { vlElementsStyle } from '@domg-wc/elements';
import styles from './app.module.css';

document.adoptedStyleSheets = [...vlElementsStyle.map((style) => style.styleSheet)];
registerWebComponents([VlInputFieldComponent, VlErrorMessageComponent, VlTextareaComponent]);

export function App() {
    const [firstName, setFirstName] = useState('');
    const [showAddressField, setShowAddressField] = useState(false);
    const [addressFieldRequired, setAddressFieldRequired] = useState(false);
    const inputKidsRef = useRef<HTMLInputElement>();

    useEffect(() => {
        const inputKids = inputKidsRef.current;

        if (inputKids) {
            inputKids.addEventListener('reset', onResetKids);
        }

        return () => {
            inputKids.removeEventListener('reset', onResetKids);
        };
    }, []);

    const onSubmit = (e: FormEvent<HTMLElement>): void => {
        e.preventDefault();

        const data = new FormData(e.target as HTMLFormElement);
        console.log(Object.fromEntries(data));
    };

    const onInputFirstName = ({ target }: FormEvent<HTMLElement> & { target: HTMLInputElement }): void => {
        setFirstName(target.value);
    };

    const onInputKids = ({ target }: FormEvent<HTMLElement> & { target: HTMLInputElement }): void => {
        const countOfKids = parseInt(target.value);

        if (countOfKids > 0) {
            setShowAddressField(true);
        } else {
            setShowAddressField(false);
        }

        if (countOfKids > 1) {
            setAddressFieldRequired(true);
        } else {
            setAddressFieldRequired(false);
        }
    };

    const onResetKids = (): void => {
        setShowAddressField(false);
        setAddressFieldRequired(false);
    };

    const onInputAge = ({ target }: FormEvent<HTMLElement> & { target: HTMLInputElement }): void => {
        const age = parseInt(target.value);

        if (age === 32) {
            setFirstName('Kristof');
        }
    };

    return (
        <div className={styles.container}>
            <form id="form" className="vl-form" onSubmit={onSubmit}>
                <div className="vl-form-grid vl-form-grid--is-stacked">
                    <div className="vl-col--3-12">
                        <label className="vl-form__label vl-form__label--block" htmlFor="voornaam">
                            Voornaam *
                        </label>
                    </div>
                    <div className="vl-col--9-12">
                        <vl-input-field-next
                            id="voornaam"
                            name="voornaam"
                            block
                            required
                            min-length={5}
                            max-length={10}
                            value={firstName}
                            onInput={onInputFirstName}
                        ></vl-input-field-next>
                        <vl-error-message-next input="voornaam" state="valueMissing">
                            Gelieve een voornaam in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next input="voornaam" state="tooShort">
                            Gelieve minimum 5 karakters te gebruiken.
                        </vl-error-message-next>
                        <vl-error-message-next input="voornaam" state="tooLong">
                            Gelieve maximum 10 karakters te gebruiken.
                        </vl-error-message-next>
                    </div>
                    <div className="vl-col--3-12">
                        <label className="vl-form__label vl-form__label--block" htmlFor="achternaam">
                            Achternaam *
                        </label>
                    </div>
                    <div className="vl-col--9-12">
                        <vl-input-field-next
                            id="achternaam"
                            name="achternaam"
                            block
                            required
                            pattern="Van(.*)"
                        ></vl-input-field-next>
                        <vl-error-message-next input="achternaam" state="valueMissing">
                            Gelieve een achternaam in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next input="achternaam" state="patternMismatch">
                            Gelieve een achternaam in te vullen die begint met "Van".
                        </vl-error-message-next>
                    </div>
                    <div className="vl-col--3-12">
                        <label className="vl-form__label vl-form__label--block" htmlFor="hobby">
                            Hobby's *
                        </label>
                    </div>
                    <div className="vl-col--9-12">
                        <vl-textarea-next
                            id="hobby"
                            name="hobby"
                            block
                            required
                            min-length={10}
                            max-length={100}
                            value="Mijn hobby's zijn ..."
                            rows={10}
                        ></vl-textarea-next>
                        <vl-error-message-next input="hobby" state="valueMissing">
                            Gelieve je hobby's in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next input="hobby" state="tooShort">
                            Gelieve minimum 10 karakters te gebruiken.
                        </vl-error-message-next>
                        <vl-error-message-next input="hobby" state="tooLong">
                            Gelieve maximum 100 karakters te gebruiken.
                        </vl-error-message-next>
                    </div>
                    <div className="vl-col--3-12">
                        <label className="vl-form__label vl-form__label--block" htmlFor="leeftijd">
                            Leeftijd *
                        </label>
                    </div>
                    <div className="vl-col--9-12">
                        <vl-input-field-next
                            id="leeftijd"
                            name="leeftijd"
                            block
                            required
                            type="number"
                            min={1}
                            max={99}
                            onInput={onInputAge}
                        ></vl-input-field-next>
                        <vl-error-message-next input="leeftijd" state="valueMissing">
                            Gelieve een leeftijd in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next input="leeftijd" state="rangeUnderflow">
                            De minimum leeftijd is 1 jaar.
                        </vl-error-message-next>
                        <vl-error-message-next input="leeftijd" state="rangeOverflow">
                            De maximum leeftijd is 99 jaar.
                        </vl-error-message-next>
                    </div>
                    <div className="vl-col--3-12">
                        <label className="vl-form__label vl-form__label--block" htmlFor="kinderen">
                            Aantal kinderen *
                        </label>
                    </div>
                    <div className="vl-col--9-12">
                        <vl-input-field-next
                            ref={inputKidsRef}
                            id="kinderen"
                            name="kinderen"
                            block
                            type="number"
                            required
                            min={0}
                            onInput={onInputKids}
                            onReset={onResetKids}
                        ></vl-input-field-next>
                        <vl-error-message-next input="kinderen" state="valueMissing">
                            Gelieve een aantal kinderen in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next input="kinderen" state="rangeUnderflow">
                            Het minimum aantal kinderen is 0.
                        </vl-error-message-next>
                    </div>
                    {showAddressField && (
                        <>
                            <div className="vl-col--3-12">
                                <label className="vl-form__label vl-form__label--block" htmlFor="adres">
                                    Adres {addressFieldRequired && '*'}
                                </label>
                            </div>
                            <div className="vl-col--9-12">
                                <vl-input-field-next
                                    id="adres"
                                    name="adres"
                                    block
                                    {...(addressFieldRequired && { required: true })}
                                ></vl-input-field-next>
                                <vl-error-message-next input="adres" state="valueMissing">
                                    Gelieve een adres in te vullen.
                                </vl-error-message-next>
                            </div>
                        </>
                    )}
                    <div className="vl-col--9-12 vl-push--3-12">
                        <div className="vl-action-group">
                            <button className="vl-button" type="submit">
                                Verstuur
                            </button>
                            <button className="vl-button" type="reset">
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default App;

declare module 'react' {
    interface VlErrorMessageAttributes<T> extends DOMAttributes<T> {
        input: string;
        state: string;
    }

    interface VlInputFieldAttributes<T> extends DOMAttributes<T> {
        id: string;
        name: string;
        type?: string;
        block?: boolean;
        required?: boolean;
        value?: string;
        pattern?: string;
        'min-length'?: number;
        'max-length'?: number;
        min?: number;
        max?: number;
        onInput?: FormEventHandler<T>;
        onReset?: FormEventHandler<T>;
    }

    interface VlTextareaAttributes<T> extends DOMAttributes<T> {
        id: string;
        name: string;
        type?: string;
        block?: boolean;
        required?: boolean;
        value?: string;
        minLength?: number;
        maxLength?: number;
        rows?: number;
        cols?: number;
    }
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'vl-error-message-next': React.DetailedHTMLProps<React.VlErrorMessageAttributes<HTMLElement>, HTMLElement>;
            'vl-input-field-next': React.DetailedHTMLProps<React.VlInputFieldAttributes<HTMLElement>, HTMLElement>;
            'vl-textarea-next': React.DetailedHTMLProps<React.VlTextareaAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
