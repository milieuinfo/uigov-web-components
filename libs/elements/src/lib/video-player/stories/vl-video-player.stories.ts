import { html } from 'lit-html';
import '../vl-video-player.element';

export default {
    title: 'Elements/video-player',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const videoPlayerDefault = () => html` <div style="max-width: 780px">
    <video
        is="vl-video-player"
        poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg?v1"
        controls
        crossorigin
        playsinline
        data-cy="video-player"
    >
        <!-- Video files -->
        <source
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
            type="video/mp4"
            size="576"
        />
        <source
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
            type="video/mp4"
            size="720"
        />
        <source
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
            type="video/mp4"
            size="1080"
        />
        <!-- Text track file -->
        <track
            kind="captions"
            label="English"
            srclang="en"
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
            default=""
        />
        <!-- Fallback for browsers that don't support the <video> element -->
        <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4" download=""> Download </a>
    </video>
</div>`;
videoPlayerDefault.storyName = 'vl-video-player - default';
