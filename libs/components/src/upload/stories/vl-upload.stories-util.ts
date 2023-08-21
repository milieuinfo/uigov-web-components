const addDuplicateWarning = () => {
    const vlUpload = document.querySelector('#vl-upload');
    const vlWarningDuplicate = document.querySelector('#warning-duplicate');
    if (!vlWarningDuplicate) {
        vlUpload?.insertAdjacentHTML(
            'afterend',
            `<vl-alert
                    id="warning-duplicate"
                    data-vl-type="warning"
                    data-vl-icon="warning"
                    data-vl-title="Waarschuwing"
                    data-vl-closable="">
                    <p>Er werden 1 of meer kopieën van hetzelfde bestand gedetecteerd. De kopieën werden verwijderd.</p>
                  </vl-alert>`
        );
    }
};

export default addDuplicateWarning;
