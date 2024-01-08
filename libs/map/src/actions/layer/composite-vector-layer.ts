import { Feature } from 'ol';
import { Geometry } from 'ol/geom';
import { Options } from 'ol/layer/BaseVector';
import OlVectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { VlCompositeVectorSource } from '../source/composite-vector-source';

export class VlCompositeVectorLayer extends OlVectorLayer<VectorSource<Feature<Geometry>>> {
    constructor(wfsLayers, options: Options<VectorSource<Feature<Geometry>>> & { title?: string } = <any>{}) {
        super(<any>{
            title: options.title, // title doesn't exist as existing parameter
            source: new VlCompositeVectorSource(wfsLayers.map((layer) => layer.getSource())),
            updateWhileAnimating: true,
            updateWhileInteracting: true,
            minResolution: wfsLayers.map((layer) => layer.getMinResolution()).reduce((x, y) => Math.min(x, y)),
            maxResolution: wfsLayers.map((layer) => layer.getMaxResolution()).reduce((x, y) => Math.max(x, y)),
        });
    }
}
