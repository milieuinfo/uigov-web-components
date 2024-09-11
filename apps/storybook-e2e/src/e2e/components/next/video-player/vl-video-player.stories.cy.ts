const videoPlayerNextDefaultUrl =
    'http://localhost:8080/iframe.html?id=components-next-video-player--video-player-default&viewMode=story';

describe('story - vl-video-player-next - default', () => {
    it('should render', () => {
        cy.visit(videoPlayerNextDefaultUrl);

        cy.get('vl-video-player-next').shadow();
    });
});
