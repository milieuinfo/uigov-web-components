export const accessibilityHtml = (importType, packageName) => `
    <style>
        .accessibility-wrapper {
            display: block;
            height: 500px;
            overflow: scroll;
        }
    </style>
s    <h2 is="vl-h2">Accessibility - ${importType} - ${packageName}</h2>
    <div class="container accessibility-wrapper">
        <h3 is="vl-h3" data-vl-has-border>Accessibility</h3>
        <vl-accessibility></vl-accessibility>
    </div>
`;
