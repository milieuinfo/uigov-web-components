export class StepsElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Steps';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Steps</h3>
                        <vl-steps id="vl-steps-1">
                            <vl-step>
                                <span slot="identifier">2</span>
                                <span slot="title">Step 2: Second action</span>
                                <span slot="sub-title">This is a subtitle.</span>
                            </vl-step>
                            <vl-step disabled="">
                                <span slot="identifier">3</span>
                                <span slot="title">Step 3: Third action</span>
                                <span slot="sub-title">This is a subtitle.</span>
                            </vl-step>
                            <vl-step type="success">
                                <span slot="identifier">4</span>
                                <span slot="title">Step 4: Fourth action</span>
                                <span slot="sub-title">This is a subtitle.</span>
                            </vl-step>
                            <vl-step type="warning">
                                <span slot="identifier">5</span>
                                <span slot="title">Step 5: Fifth action</span>
                                <span slot="sub-title">This is a subtitle.</span>
                            </vl-step>
                            <vl-step type="error">
                                <span slot="identifier">6</span>
                                <span slot="title">Step 6: sixth action</span>
                                <span slot="sub-title">This is a subtitle.</span>
                            </vl-step>
                        </vl-steps>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Steps with accordions</h3>
                        <vl-steps id="vl-steps-2">
                            <vl-step data-vl-disabled="">
                                <span slot="identifier">0</span>
                                <span slot="title">Six centuries ago</span>
                                <span slot="sub-title">The last visitor from earth entered my world.</span>
                                <span slot="content"> Now, it's your turn to feel that pain. The gates are open. </span>
                            </vl-step>
                            <vl-step data-vl-toggleable="">
                                <span slot="identifier">1</span>
                                <span slot="title">Gate 1</span>
                                <span slot="content"> Darkness, the world of demons. Look around you, they're everywhere. </span>
                            </vl-step>
                            <vl-step data-vl-toggleable="">
                                <span slot="identifier">2</span>
                                <span slot="title">Gate 2</span>
                                <span slot="content"> My guards are watching you. </span>
                            </vl-step>
                            <vl-step data-vl-toggleable="">
                                <span slot="identifier">3</span>
                                <span slot="title">Gate 3</span>
                                <span slot="content"> Only evil lives here. </span>
                            </vl-step>
                            <vl-step data-vl-toggleable="">
                                <span slot="identifier">4</span>
                                <span slot="title">Gate 4</span>
                                <span slot="content"> There's no way out. </span>
                            </vl-step>
                            <vl-step data-vl-toggleable="">
                                <span slot="identifier">5</span>
                                <span slot="title">Gate 5</span>
                                <span slot="content"> Feel the fire. </span>
                            </vl-step>
                        </vl-steps>
                    </div>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Steps with a timeline</h3>
                        <vl-steps id="vl-steps-3" data-vl-timeline="">
                            <vl-step>
                                <span slot="identifier">2</span>
                                <span slot="identifier-annotation">maa</span>
                                <span slot="title">Central Station</span>
                                <span slot="title-annotation">13u00 - 15u00</span>
                                <span slot="sub-title">The most beautiful train station in the world</span>
                                <span slot="content">
                                    The Antwerp Central Station, chosen by DK magazine as the most beautiful manmade object, is the perfect
                                    starting point for any trip to Antwerp. The Central Station has been drawn by Da Vinci himself in 200 BC
                                    and built by 10 000 laborers from all over the world. <br />
                                    Described by Caesar as the bravest building of all buildings, the unique architecture is perfectly
                                    maintained and keeps dazzling archaeologists.
                                </span>
                            </vl-step>
                            <vl-duration-step> Vrije tijd: 1 uur </vl-duration-step>
                            <vl-step>
                                <span slot="identifier">3</span>
                                <span slot="identifier-annotation">maa</span>
                                <span slot="title">The Botanical Gardens</span>
                                <span slot="sub-title">A green oasis in a bustling city</span>
                                <span slot="content">
                                    The Royal Botanical Gardens in Antwerp is a massive botanical garden in the center of the city. These
                                    gardens are ideal to stroll around, take a breather from everyday life or go for a leisurly walk, all of
                                    this on less than 500m from the city center.
                                </span>
                            </vl-step>
                            <vl-duration-step> Vrije tijd: 2 uur </vl-duration-step>
                            <vl-step data-vl-disabled="">
                                <span slot="identifier">3</span>
                                <span slot="identifier-annotation">maa</span>
                                <span slot="title">Bike ride</span>
                                <span slot="title-annotation">22u00 - 23u00</span>
                                <span slot="sub-title">Linkeroever</span>
                                <span slot="content"> This activity is canceled. </span>
                            </vl-step>
                            <vl-step data-vl-type="success">
                                <span slot="identifier">3</span>
                                <span slot="identifier-annotation">maa</span>
                                <span slot="title">Bike ride</span>
                                <span slot="title-annotation">22u00 - 23u00</span>
                                <span slot="sub-title">Linkeroever</span>
                                <span slot="content"> This activity is new! </span>
                            </vl-step>
                            <vl-step data-vl-type="warning">
                                <span slot="identifier">3</span>
                                <span slot="identifier-annotation">maa</span>
                                <span slot="title">Bike ride</span>
                                <span slot="title-annotation">22u00 - 23u00</span>
                                <span slot="sub-title">Linkeroever</span>
                                <span slot="content"> This activity is almost fully booked. </span>
                            </vl-step>
                            <vl-step data-vl-type="error">
                                <span slot="identifier">3</span>
                                <span slot="identifier-annotation">maa</span>
                                <span slot="title">Bike ride</span>
                                <span slot="title-annotation">22u00 - 23u00</span>
                                <span slot="sub-title">Linkeroever</span>
                                <span slot="content"> This activity is canceled. </span>
                            </vl-step>
                        </vl-steps>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-steps', StepsElement);
