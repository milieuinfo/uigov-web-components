export const buttonsInActionGroupHtml = (importType, packageName) => `
    <div id="consumer-elements">
        <h2 is="vl-h2">Buttons In Action Group - ${importType} - ${packageName}</h2>
        <div is="vl-action-group">
            <button is="vl-button">
                Aanvraag starten
            </button>
            <button is="vl-button" data-vl-secondary>
                Annuleren
            </button>
        </div>

    </div>
`;
