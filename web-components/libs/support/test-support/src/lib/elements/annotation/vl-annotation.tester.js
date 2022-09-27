import { VlElementTester } from '../../base/vl-element.tester';

export class VlAnnotationTester extends VlElementTester {
    async hasSmallClassName() {
        const input = await this.getElementInShadow(this, 'span');
        const classValue = await input.getAttribute('class');
        return classValue.includes('vl-annotation--small');
    }
}
