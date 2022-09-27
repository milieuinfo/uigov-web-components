export class VideoPlayerElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Video player';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Video player</h3>
                        <video is="vl-video-player" poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg?v1" controls="" crossorigin="" playsinline="">
                            <!-- Video files -->
                            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" size="576">
                            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" size="720">
                            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type="video/mp4" size="1080">
                            <!-- Text track file -->
                            <track kind="captions" label="English" srclang="en" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt" default="">
                            <!-- Fallback for browsers that don't support the <video> element -->
                            <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4" download="">
                                Download
                            </a>
                        </video>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-video-player', VideoPlayerElement);
