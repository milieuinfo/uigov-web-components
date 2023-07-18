const eventType = 'vl-alert-closed';

export class VlAlertClosedEvent extends Event {
    static eventType = eventType;

    constructor() {
        super(eventType, { bubbles: true });
    }
}
