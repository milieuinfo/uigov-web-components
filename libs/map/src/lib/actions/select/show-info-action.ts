import { VlDrawAction } from '../draw/draw-action';
import { VlTooltips } from '../tooltips';


//TODO: wordt dit nog gebruikt?
export class VlShowInfoAction extends VlDrawAction {
    private Vltooltips: VlTooltips;

    constructor(layer, infoPromise, loadingMessage, tooltipOptions?) {
        const Vltooltips = new VlTooltips(layer, infoPromise, loadingMessage);

        super(layer, 'Point', (feature) => {
            this.Vltooltips.showTooltip(this.map, feature, feature.getGeometry().getCoordinates(), tooltipOptions);
        });

        this.layer = layer;
        this.Vltooltips = Vltooltips;
    }

    clear() {
        this.Vltooltips.clear(this.map);
        this.layer.getSource().clear();
    }

    deactivate() {
        this.clear();
        super.deactivate();
    }
}
