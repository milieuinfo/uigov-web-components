
        // ! Dit bestand is gegenereerd door het generate-icon-files.mjs script

        import { CSSResult, LitElement, css, html } from 'lit';
        import { registerWebComponents, webComponent } from '@domg-wc/common-utilities';
        import iconStyle from '@domg-wc/common-utilities/css/icon/icon.css';
        import { VlIconComponent } from '@domg-wc/components/next/icon';
        
        @webComponent('vl-all-icons')
        export class VlAllIconsComponent extends LitElement {
            static {
                registerWebComponents([VlIconComponent]);
            }
        
            static override get styles(): CSSResult[] {
                return [iconStyle,
                    css`
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
                    `
                ];
            }
        
            override render() {
                const allIcons = ['add','addressbook','airplane','alarm-silent','alarm','alert-circle-filled','alert-circle','alert-small','alert-triangle-filled','alert-triangle','align-center','align-justify','align-left','align-right','area','arrange-1-to-9','arrange-9-to-1','arrange-a-to-z','arrange-amount-large-to-small','arrange-amount-small-to-large','arrange-z-to-a','arrow-bottom','arrow-down-fat','arrow-down-thin','arrow-down','arrow-freemove','arrow-left-fat','arrow-left-thin','arrow-left','arrow-right-fat','arrow-right-thin','arrow-right','arrow-thin','arrow-up-fat','arrow-up-thin','arrow-up','arrow','asterisk','audio-description','back','ban','bell','bike-closed-criterium','bike-open-criterium','bike','bin','binoculars','boat-ship','bold','book','bookmark-alt-1','bookmark-alt-2','bookmark','breadcrumb-separator','briefcase','building-big','building','bullet','burger-alt','burger','burgerprofiel','bus','business-graph-bar','business-graph-pie','cake','calculator','calendar-add','calendar-check','calendar-subtract','calendar','calendar_check','calendar_date','camera','car','chat-bubble-square-alt','chat-bubble-square','chat-help','chat','check-circle','check-filled','check-small','check-thin','check','child','clock','close-light','close-small','close','cloud-download','cloud-upload','cloud','code-branch','coffee-cup','cog','coin-stack','compass','computer-screen','confluence','construction-crane','construction-shack','contacts','content-book-favorite-star','content-book','content-box','content-filter','content-note','content-view-column','contract','control-cross-over','copy-paste','copyright','credit-card','crop','cross-thin','cross','cursor-arrow-big','cursor-arrow-small','cursor-finger-down','cursor-finger-left','cursor-finger-right','cursor-finger-up','cursor-hand','cursor-hold','dashboard','data-download','data-transfer','data-upload','demonstration','diagram','direction-sign','document-small','document','double-arrow','download-harddisk','drawer-down','drawer','edit','email-read','email','enlarge','envelope','expand-horizontal-alt','expand-horizontal','expand-vertical','expand','external','facebook','faq','fastback','fastforward','fax','field','file-audio','file-copy','file-download','file-edit','file-image','file-new','file-office-doc','file-office-pdf','file-office-ppt','file-office-xls','file-swap','file-tasks-check','file-upload','file-video','file-zipped-new','file-zipped-vice','file','files-coding','film','flickr','focus','folder','font','gender-female-male','gender-female','gender-male','gender-transgender','globe-alt','globe','googleplus','graduate','graduation-hat','hammer','hand-hint','harddisk','headphone','health-first-aid-kit','health-heart-pulse','health-hospital','hide','hierarchy','hotel-bath-shower','hotel-bed','hotel-fire-alarm','hotel-shower','hourglass','id-card','id','images-copy','images','inbox','indent-left','indent-right','info-circle','info-filled','info-small','info','instagram','ironing','italic','jira','key','keyboard','laptop','lightbulb','link-broken','link','linkedin','list-add','list-bullets-alt','list-bullets','list-numbers','list','location-direction-arrow','location-gps','location-map','location','lock-unlock','lock','login','logout','long-arrow','magic-wand','magnifier','mail','market','menu','messenger','microphone-off','microphone','minus-circle','minus','mobile-phone','move-down','move-left-right','moving-elevator','music-note','nature-leaf','nature-tree','nav-down-double','nav-down-light','nav-down','nav-left-double','nav-left-light','nav-left','nav-right-double','nav-right-light','nav-right','nav-show-more-horizontal','nav-show-more-vertical','nav-up-double','nav-up-light','nav-up','news','newspaper','next','other-annoyances-alt','other-annoyances','paint-brush','paper','paperclip','paragraph','pause','pencil-write','pencil','pennants','phone-incoming','phone-off','phone-outgoing','phone-record','phone-signal-low','phone-speaker','phone','pick-up','pin-paper','pin','pinterest','places-factory','places-home','play','playstreet','plug','plus-circle','plus','power-button','printer-view','printer','profile-active','programming-bug','publication','question-mark-filled','question-mark-small','question-mark','question','recreation','reply-all','reply','rewards-certified-badge','rewards-gift','road-block','road','romance-marriage-license','save','scaffold','scan','scissors','search','server','settings','share-megaphone','share-rss-feed','share','shipping-truck','shopping-basket-add','shopping-basket-subtract','shopping-basket','shopping-cart','shopping','shrink','sign-disable','sign-recycle','sitemap','skype','smiley-poker-face','smiley-smile','snapchat','sort','speaker-volume-decrease','speaker-volume-high','speaker-volume-increase','speaker-volume-low','speaker-volume-medium','speaker-volume-off','sports-competition','spotify','stop','subtract','subway','suitcase','switches','symbol-wifi-check','symbol-wifi-close','symbol-wifi','synchronize-timeout','synchronize','tag-add','tag-check','tag-close','tag-double','tag-edit','tag-subtract','tag-view','tag','taxi','television','terrace','text-cursor','text-eraser','text-redo','text-undo','timeline','tint','train','trash','trophy','twitter','underline','university','up-down-arrows','upload-harddisk','user-alt','user-download','user-email','user-female','user-group','user-male','user-redirect','user-setting','user-signup','user','vaccum-cleaner','video-subtitle','view-add','vlaanderen','vote-flag','vote-heart','vote-star','vote-thumbs-down','vote-thumbs-up','voucher-check','voucher-download','voucher-scissors','vouchers-list','wallet','warning','whatsapp','wrench','www','youtube','zoom-in','zoom-out'];

                return html`
                    <div class="container">
                        ${allIcons.map((icon) => html`
                                <div class="icon" @click=${() => this.handleClickIcon(icon)}>
                                    <vl-icon-next icon=${icon}></vl-icon-next>
                                    <span class="name">${icon}</span>
                                </div>
                        `)}
                    </div>
                `;
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
    