export const mapWithGrayBaselayerHtml = (importType, packageName) => `
    <div id="consumer-map">
        <h2 is="vl-h2">Map With Gray Baselayer - ${importType} - ${packageName}</h2>
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    </div>
`;
