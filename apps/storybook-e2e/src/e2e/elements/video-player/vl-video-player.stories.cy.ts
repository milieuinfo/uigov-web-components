const videoPlayerUrl =
    'http://localhost:8080/iframe.html?id=elements-video-player--video-player-default&viewMode=story';

describe('story vl-video-player', () => {
    it('should contain a video player', () => {
        cy.visit(`${videoPlayerUrl}`);
        cy.getDataCy('video-player').should('have.attr', 'data-vl-video-player-dressed', 'true');
    });
});
