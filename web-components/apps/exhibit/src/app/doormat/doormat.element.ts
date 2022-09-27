export class DoormatElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Doormat';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Doormat</h3>
                        <a is="vl-doormat" href="#">
                            <h2 is="vl-doormat-title">Bouwen, wonen en energie</h2>
                            <div is="vl-doormat-text">De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze biedt sociale woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt oplossingen om de stijging van de vastgoedprijzen onder controle te houden.</div>
                        </a>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Doormat with image</h3>
                        <a is="vl-doormat" href="#">
                            <h2 is="vl-doormat-title">Bouwen, wonen en energie</h2>
                            <div is="vl-doormat-text">De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze biedt sociale woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt oplossingen om de stijging van de vastgoedprijzen onder controle te houden.</div>
                            <img is="vl-doormat-image" src="https://picsum.photos/200/300?image=1048" alt="Bouwen in Brussel" width="100" height="150">
                        </a>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Doormat alt</h3>
                        <a is="vl-doormat" href="#" data-vl-alt="">
                            <h2 is="vl-doormat-title">Bouwen, wonen en energie</h2>
                            <div is="vl-doormat-text">De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze biedt sociale woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt oplossingen om de stijging van de vastgoedprijzen onder controle te houden.</div>
                        </a>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Doormat with graphic</h3>
                        <a is="vl-doormat" href="#">
                            <h2 is="vl-doormat-title">Bouwen, wonen en energie</h2>
                            <div is="vl-doormat-text">De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze biedt sociale woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt oplossingen om de stijging van de vastgoedprijzen onder controle te houden.</div>
                            <img is="vl-doormat-image" src="https://picsum.photos/1600/400?image=1048" alt="Bouwen in Brussel" data-vl-graphic="">
                        </a>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-doormat', DoormatElement);
