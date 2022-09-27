export class UploadElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Upload';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Upload</h3>
                        <vl-upload url="http://httpbin.org/post" data-vl-input-name="files" id="vl-upload"></vl-upload> 
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Upload when adding file</h3>
                        <vl-upload id="vl-upload-auto-process" url="http://httpbin.org/post" data-vl-input-name="files" data-vl-autoprocess="true"></vl-upload> 
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Upload with limited size</h3>
                        <vl-upload id="vl-upload-max-5" data-vl-url="http://httpbin.org/post" data-vl-input-name="files" data-vl-error-message-filesize="De grootte van het bestand mag maximaal :maxFsz zijn." data-vl-error-message-maxfiles="Je kan maximaal :maxfl file(s) uploaden." data-vl-max-files="5" data-vl-max-size="1000000"></vl-upload>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Upload without doubles</h3>
                        <vl-upload id="vl-upload-unique" data-vl-url="http://httpbin.org/post" data-vl-input-name="files" error-message-filesize="De grootte van het bestand mag maximaal :maxFsz zijn." error-message-maxfiles="Je kan maximaal :maxfl file(s) uploaden." data-vl-max-files="2" data-vl-max-size="10000000" disallow-duplicates="true"></vl-upload>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Upload disabled</h3>
                        <vl-upload url="http://httpbin.org/post" data-vl-input-name="files" id="vl-upload-disabled" data-vl-disabled=""></vl-upload>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-upload', UploadElement);
