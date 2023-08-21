import { VlColumnTester } from '../grid/vl-column.tester';

export class VlFormColumnTester extends VlColumnTester {
    get _columnClassPrefix() {
        return 'vl-form-col--';
    }

    get _pushClassPrefix() {
        return 'vl-form-push--';
    }
}
