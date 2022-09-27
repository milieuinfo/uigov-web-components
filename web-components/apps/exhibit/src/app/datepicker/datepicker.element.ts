export class DatepickerElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Datepicker';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Datepicker</h3>
                        <vl-datepicker id="default-datepicker"></vl-datepicker>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Datepicker with custom format</h3>
                        <vl-datepicker id="custom-format-datepicker" data-vl-format="d/m/Y"></vl-datepicker>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Datepicker with prefilled date</h3>
                        <vl-datepicker id="prefilled-datepicker" data-vl-format="d/m/Y" data-vl-selected-date="today"></vl-datepicker>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Datepicker with min/max dates.</h3>
                        <vl-datepicker id="min-max-datepicker" data-vl-min-date="10-05-2019" data-vl-max-date="15-05-2019"></vl-datepicker>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Date range picker</h3>
                        <vl-datepicker id="range-datepicker" data-vl-type="range"></vl-datepicker>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Timepicker</h3>
                        <vl-datepicker id="timepicker-datepicker" data-vl-type="time" data-vl-format="H:i"></vl-datepicker>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-datepicker', DatepickerElement);
