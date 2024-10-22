// ! Dit script genereert de icon-mapping.css.ts en vl-all-icons.component.ts bestanden.

// ! Voer dit bestand uit met volgend commando: node --experimental-default-type=module generate-icon-files.mjs

import * as fs from 'fs-extra';
import { iconFontLocation } from '../../libs/common/utilities/src/css/base/font/vl-fonts.js';

const getSvgIconString = async () => {
    const response = await fetch(`${iconFontLocation}.svg`);
    const svgString = await response.text();

    return svgString;
};

const parseSvgGlyphs = (svgString) => {
    const glyphRegex = /<glyph[^>]*glyph-name="([^"]+)"[^>]*unicode="([^"]+)"[^>]*d="([^"]+)"[^>]*\/>/g;
    const glyphs = [];
    let glyphMatch;

    while ((glyphMatch = glyphRegex.exec(svgString)) !== null) {
        const glyphData = {
            glyph_name: glyphMatch[1],
            unicode: glyphMatch[2],
        };
        glyphs.push(glyphData);
    }

    return glyphs;
};

const generateIconMapping = (glyphs) => {
    const iconMapping = glyphs.reduce((mapping, { glyph_name, unicode }) => {
        const parsedUnicode = unicode.slice(unicode.indexOf('x') + 1).replace(';', '');

        const cssString = `
            .vl-icon--${glyph_name}::before {
                content: '\\\\${parsedUnicode}';
            }
        `;
        mapping += cssString;
        return mapping;
    }, '');

    return `
        // ! Dit bestand is gegenereerd door het generate-icon-files.mjs script

        import { css, CSSResult } from 'lit';

        const styles: CSSResult = css${'`'}
            ${iconMapping}
        ${'`'};

        export default styles;
    `;
};

const generateAllIconsComponent = (glyphs) => {
    const allIconsLitComponent = `
        // ! Dit bestand is gegenereerd door het generate-icon-files.mjs script

        import { CSSResult, LitElement, css, html } from 'lit';
        import { registerWebComponents, webComponent } from '@domg-wc/common-utilities';
        import { iconStyles } from '@domg-wc/common-utilities/css';
        import { VlIconComponent } from '@domg-wc/components/next/icon';

        @webComponent('vl-all-icons')
        export class VlAllIconsComponent extends LitElement {
            static {
                registerWebComponents([VlIconComponent]);
            }

            static override get styles(): CSSResult[] {
                return [iconStyles,
                    css${'`'}
                        .container {
                            display: flex;
                            flex-wrap: wrap;
                        }

                        .icon {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            width: 12rem;
                            margin-bottom: 3rem;
                            text-align: center;
                            font-size: 2.4rem;
                            cursor: copy;
                        }

                        .name {
                            font-size: 1.4rem;
                            display: block;
                            margin-top: 1rem;
                        }
                    ${'`'}
                ];
            }

            override render() {
                const allIcons = [${glyphs.map(({ glyph_name }) => `'${glyph_name}'`)}];

                return html${'`'}
                    <div class="container">
                        ${
                            `$` +
                            `{allIcons.map((icon) => html${'`'}
                                <div class="icon" @click=${'$'}{() => this.handleClickIcon(icon)}>
                                    <vl-icon-next icon=${'$'}{icon}></vl-icon-next>
                                    <span class="name">${'$'}{icon}</span>
                                </div>
                        ${'`'})}`
                        }
                    </div>
                ${'`'};
            }

            private handleClickIcon(icon: string) {
                navigator.clipboard.writeText(icon);
            }
        }

        declare global {
            interface HTMLElementTagNameMap {
                'vl-all-icons': VlAllIconsComponent;
            }
        }
    `;

    return allIconsLitComponent;
};

const writeFile = (location, content) => {
    fs.writeFile(location, content, (err) => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
    });
};

const processIcons = async () => {
    const svgIconString = await getSvgIconString();
    const glyphs = parseSvgGlyphs(svgIconString);
    const iconMapping = generateIconMapping(glyphs);
    const allIconsComponent = generateAllIconsComponent(glyphs);

    writeFile('../../libs/common/utilities/src/css/icon/icon-mapping.css.ts', iconMapping);
    writeFile('../../libs/integration/src/icon/vl-all-icons.component.ts', allIconsComponent);
};

processIcons();

console.log('iconen gegenereerd - TODO verbeteren');
