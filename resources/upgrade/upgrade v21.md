wat: upgrade van v14.0.2 -> v21.0.2 (en voor core van v15.0.2 -> v22.0.2)
beschrijving: onderstaande zijn de verschillen tussen de versies - gemeld door DV
 -> zie: https://overheid.vlaanderen.be/webuniversum/v3/releases/4.0.0


--------------------------------------------------------
util
--------------------------------------------------------

@govflanders/vl-ui-util@19.0.2
    > Improvement: vl-u-border - add support for usage with stacked-small & stacked-large grid


--------------------------------------------------------
elementen
--------------------------------------------------------

@govflanders/vl-ui-button@15.0.9
    > Improvement: Cursor should be pointer when it is an a tag.
@govflanders/vl-ui-button@18.0.3
    > Improvement: Sync loading button mod padding with design.

@govflanders/vl-ui-data-table@15.0.4
    > Bugfix: Fix border style issues.
@govflanders/vl-ui-data-table@18.1.2
    > Bugfix: Add mod to truncate column text and changed default behaviour.
@govflanders/vl-ui-data-table@19.0.2
    > Improvement: Table header received border-top for better readability of headings.

@govflanders/vl-ui-form-message@14.0.4
    > Improvement: Sync form message alt text color with design.
@govflanders/vl-ui-form-message@15.0.8
    > Bugfix: Darken the form-message label.

@govflanders/vl-ui-icon@17.0.2
    > Bugfix: UI bugfix
@govflanders/vl-ui-icon@20.0.4
    > Improvement: Add X icon (former Twitter).

@govflanders/vl-ui-image@16.0.1
    > Bugfix: Full width modifier shouldn't add negative margin.

@govflanders/vl-ui-link-list@18.1.4
    > Improvement: Update design.
@govflanders/vl-ui-link-list@20.0.10
    > Bugfix: Fixed documentation 404 issue.

@govflanders/vl-ui-multiselect@14.0.3
    > Bugfix: Loading state did not render correctly.
@govflanders/vl-ui-multiselect@15.0.2
    > Bugfix: Fix border showing on hover when select is still closed

@govflanders/vl-ui-search-filter@14.0.4
    > Improvement: Sync search filter label margin with design.
@govflanders/vl-ui-search-filter@21.0.0
    > Bugfix: layout bugfix adding margin-bottom on mobile

@govflanders/vl-ui-side-navigation@19.0.2
    > Improvement: UI improvement removing redundant padding & overflow:hidden

@govflanders/vl-ui-tooltip@20.0.11
    > Improvement: update popper.js library


--------------------------------------------------------
componenten
--------------------------------------------------------

@govflanders/vl-ui-alert@17.0.3
    > Improvement: Styling update.

@govflanders/vl-ui-breadcrumb@15.0.0
    > Bugfix: Improved logic for condensed breadcrumbs representation & layout improvements.
@govflanders/vl-ui-breadcrumb@16.0.5
    > Improvement: Disable visited state for breadcrumb links.
@govflanders/vl-ui-breadcrumb@15.0.7
    > Improvement: Last not clickable breadcrumb item will take full available width.

@govflanders/vl-ui-contact-card@20.0.7
    > Deprecated: Deprecated contact-card, use contact-data instead.

@govflanders/vl-ui-datepicker@18.1.3
    > Improvement: Added the option to customize locale of the datepicker.

@govflanders/vl-ui-functional-header@20.0.0
    > Improvement - BREAKING: New color modes. More information about those breaking changes on our documentation site.

@govflanders/vl-ui-loader@15.0.7
    > Improvement: Moved role attribute for WCAG.

@govflanders/vl-ui-modal@15.0.0
    > Bugfix: Use the samen close-behaviour for vl-modal as the vl-popover to improve UX consistency.
@govflanders/vl-ui-modal@15.0.2
    > Bugfix: Fix bug in the close function
@govflanders/vl-ui-modal@18.0.3
    > Improvement: Title font from serif to sans.

@govflanders/vl-ui-pill@15.0.7
    > Improvement: New colors with better contrast for WCAG.

@govflanders/vl-ui-popover@14.0.4
    > Bugfix: Propagate popover content click events.
@govflanders/vl-ui-popover@15.0.0
    > Bugfix: Fixing popover content wrapper element breaks event listeners on child elements.

@govflanders/vl-ui-progress-bar@16.0.0
    > Improvement: Increased contrast to improve accessibility.

@govflanders/vl-ui-radio@17.0.1
    > Bugfix: Fixed radio disabled checked state.
@govflanders/vl-ui-radio@17.0.5
    > Bugfix: Fixed text color in combination with theme colors.

@govflanders/vl-ui-spotlight@15.0.0
    > Bugfix: BREAKING! Unifying image-icon & image-badge into one image property (that can be configured accordingly). + Vl-spotlight layout improvements on mobile view.
@govflanders/vl-ui-spotlight@15.0.1
    > Improvement: Use badge for rounded images.
@govflanders/vl-ui-spotlight@15.0.9
    > Improvement: Added support for icon display option.
@govflanders/vl-ui-spotlight@18.1.4
    > Improvement: Update design.
@govflanders/vl-ui-spotlight@20.0.7
    > Improvement: Vl-spotlight - adjust line-height to meet design updates.

@govflanders/vl-ui-steps@16.0.0
    > Improvement - BREAKING: Improved and refactored style. More information about those breaking changes on our documentation site.
@govflanders/vl-ui-steps@17.0.2
    > Bugfix: UI bugfixes
@govflanders/vl-ui-steps@18.0.2
    > Bugfix: UI bugfix for overflowing border on bullet.
@govflanders/vl-ui-steps@18.1.1
    > Bugfix: Minor layout bugfix fixing misaligned borders between steps in timeline mode.
@govflanders/vl-ui-steps@20.0.9
    > Improvement: Vl-steps - fix toggle is blocked by overflowing grid inside content.
@govflanders/vl-ui-steps@21.0.0
    > Bugfix: Layout bugfix adding more margin between title & alert

@govflanders/vl-ui-typography@18.0.1
    > Bugfix: Fix theming of the quote in vl-typography.
@govflanders/vl-ui-typography@20.0.6
    > Bugfix: Text clamp toggle is not visible when combined with tab content.

@govflanders/vl-ui-upload@18.0.1
    > Bugfix: Fix backdrop in upload component.


--------------------------------------------------------
te bekijken - maar hebben we niet lijkt mij
--------------------------------------------------------

@govflanders/vl-ui-contact-data@18.1.3
    > Improvement: Add layout improvements with container query's.

@govflanders/vl-ui-icon-list@19.0.2
    > Improvement: UI improvement vl-icon-list aligning icon color with design.

@govflanders/vl-ui-layer-map@18.1.3
    > Bugfix: Update the old (unsupported) geo layers to the new geo layers.

@govflanders/vl-ui-ol-map@20.0.11
    > Feature: add layer opacity support

--------------------------------------------------------
