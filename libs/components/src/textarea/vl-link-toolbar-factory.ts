import { registerWebComponents } from '@domg-wc/common';
import { VlTextareaModal } from './vl-textarea-modal.component';

export class VlLinkToolbarFactory {
    static {
        registerWebComponents([VlTextareaModal]);
    }

    create(editor: any) {
        return {
            icon: 'link',
            title: 'Link',
            tooltip: 'Link',
            onSetup: () => {
                const target = editor.targetElm;
                const parent = target.parentElement || target.getRootNode();
                if (!parent.querySelector('vl-textarea-modal')) {
                    const modal = document.createElement('vl-textarea-modal');
                    parent.append(modal);
                }
            },
            onAction: () => {
                const target = editor.targetElm;
                const parent = target.parentElement || target.getRootNode();
                const modal = parent.querySelector('vl-textarea-modal');
                customElements.whenDefined('vl-textarea-modal').then(() => {
                    const selectedNode = editor.selection.getNode();
                    const selectedText = editor.selection.getContent({ format: 'text' });

                    if (selectedNode && selectedNode.href) {
                        modal.text = selectedNode.textContent;
                        modal.url = selectedNode.href;
                        modal.onSubmit(() => {
                            selectedNode.text = modal.text;
                            selectedNode.href = modal.url;
                        });
                    } else {
                        if (selectedText) {
                            modal.text = selectedText;
                            modal.focusUrl();
                        }
                        modal.onSubmit(() => {
                            editor.insertContent(`<a target="_blank" href="${modal.url}">${modal.text}</a>`);
                        });
                    }

                    modal.open();
                });
            },
        };
    }
}
