declare module 'dropzone' {
    export interface DropzoneResizeInfo {
        srcX?: number;
        srcY?: number;
        trgX?: number;
        trgY?: number;
        srcWidth?: number;
        srcHeight?: number;
        trgWidth?: number;
        trgHeight?: number;
    }

    export interface DropzoneFileUpload {
        progress: number;
        total: number;
        bytesSent: number;
        uuid: string;
        totalChunkCount?: number;
    }

    export interface DropzoneFile extends File {
        dataURL?: string;
        previewElement: HTMLElement;
        previewTemplate: HTMLElement;
        previewsContainer: HTMLElement;
        status: string;
        accepted: boolean;
        xhr?: XMLHttpRequest;
        upload?: DropzoneFileUpload;
    }

    export interface DropzoneMockFile {
        name: string;
        size: number;
        [index: string]: any;
    }

    export interface DropzoneDictFileSizeUnits {
        tb?: string;
        gb?: string;
        mb?: string;
        kb?: string;
        b?: string;
    }

    export interface DropzoneOptions {
        // Include all other previously defined properties
    }

    export interface DropzoneListener {
        element: HTMLElement;
        events: {
            [key: string]: (e: Event) => any;
        };
    }

    // Declare the Dropzone class and export it
    export class Dropzone {
        constructor(container: string | HTMLElement, options?: Dropzone.DropzoneOptions);

        static autoDiscover: boolean;
        static blacklistedBrowsers: RegExp[];
        static confirm: (question: string, accepted: () => void, rejected?: () => void) => void;
        static createElement(string: string): HTMLElement;
        static dataURItoBlob(dataURI: string): Blob;
        static discover(): Dropzone[];
        static elementInside(element: HTMLElement, container: HTMLElement): boolean;
        static forElement(element: string | HTMLElement): Dropzone;
        static getElement(element: string | HTMLElement, name?: string): HTMLElement;
        static getElements(elements: string | HTMLElement | Array<string | HTMLElement>): HTMLElement[];
        static instances: Dropzone[];
        static isBrowserSupported(): boolean;
        static isValidFile(file: File, acceptedFiles: string): boolean;
        static options: { [key: string]: Dropzone.DropzoneOptions | false };
        static optionsForElement(element: HTMLElement): Dropzone.DropzoneOptions | undefined;
        static version: string;

        static ADDED: string;
        static QUEUED: string;
        static ACCEPTED: string;
        static UPLOADING: string;
        static PROCESSING: string;
        static CANCELED: string;
        static ERROR: string;
        static SUCCESS: string;

        element: HTMLElement;
        files: Dropzone.DropzoneFile[];
        hiddenFileInput?: HTMLInputElement | undefined;
        listeners: Dropzone.DropzoneListener[];
        defaultOptions: Dropzone.DropzoneOptions;
        options: Dropzone.DropzoneOptions;
        previewsContainer: HTMLElement;
        version: string;

        enable(): void;

        disable(): void;

        destroy(): Dropzone;

        addFile(file: Dropzone.DropzoneFile): void;

        removeFile(file: Dropzone.DropzoneFile): void;

        removeAllFiles(cancelIfNecessary?: boolean): void;

        resizeImage(
            file: Dropzone.DropzoneFile,
            width?: number,
            height?: number,
            resizeMethod?: string,
            callback?: (...args: any[]) => void
        ): void;

        processQueue(): void;

        cancelUpload(file: Dropzone.DropzoneFile): void;

        createThumbnail(
            file: Dropzone.DropzoneFile,
            width?: number,
            height?: number,
            resizeMethod?: string,
            fixOrientation?: boolean,
            callback?: (...args: any[]) => void
        ): any;

        displayExistingFile(
            mockFile: Dropzone.DropzoneMockFile,
            imageUrl: string,
            callback?: () => void,
            crossOrigin?: 'anonymous' | 'use-credentials',
            resizeThumbnail?: boolean
        ): any;

        createThumbnailFromUrl(
            file: Dropzone.DropzoneFile,
            width?: number,
            height?: number,
            resizeMethod?: string,
            fixOrientation?: boolean,
            callback?: (...args: any[]) => void,
            crossOrigin?: string
        ): any;

        processFiles(files: Dropzone.DropzoneFile[]): void;

        processFile(file: Dropzone.DropzoneFile): void;

        uploadFile(file: Dropzone.DropzoneFile): void;

        uploadFiles(files: Dropzone.DropzoneFile[]): void;

        getAcceptedFiles(): Dropzone.DropzoneFile[];

        getActiveFiles(): Dropzone.DropzoneFile[];

        getAddedFiles(): Dropzone.DropzoneFile[];

        getRejectedFiles(): Dropzone.DropzoneFile[];

        getQueuedFiles(): Dropzone.DropzoneFile[];

        getUploadingFiles(): Dropzone.DropzoneFile[];

        accept(file: Dropzone.DropzoneFile, done: (error?: string | Error) => void): void;

        getFilesWithStatus(status: string): Dropzone.DropzoneFile[];

        enqueueFile(file: Dropzone.DropzoneFile): void;

        enqueueFiles(file: Dropzone.DropzoneFile[]): void;

        createThumbnail(file: Dropzone.DropzoneFile, callback?: (...args: any[]) => void): any;

        createThumbnailFromUrl(file: Dropzone.DropzoneFile, url: string, callback?: (...args: any[]) => void): any;

        on(eventName: string, callback: (...args: any[]) => void): Dropzone;

        off(): Dropzone;
        off(eventName: string, callback?: (...args: any[]) => void): Dropzone;

        emit(eventName: string, ...args: any[]): Dropzone;

        on(eventName: 'drop', callback: (e: DragEvent) => any): Dropzone;
        on(eventName: 'dragstart', callback: (e: DragEvent) => any): Dropzone;
        on(eventName: 'dragend', callback: (e: DragEvent) => any): Dropzone;
        on(eventName: 'dragenter', callback: (e: DragEvent) => any): Dropzone;
        on(eventName: 'dragover', callback: (e: DragEvent) => any): Dropzone;
        on(eventName: 'dragleave', callback: (e: DragEvent) => any): Dropzone;
        on(eventName: 'paste', callback: (e: DragEvent) => any): Dropzone;

        on(eventName: 'reset'): Dropzone;

        on(eventName: 'addedfile', callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
        on(eventName: 'addedfiles', callback: (files: Dropzone.DropzoneFile[]) => any): Dropzone;
        on(eventName: 'removedfile', callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
        on(eventName: 'thumbnail', callback: (file: Dropzone.DropzoneFile, dataUrl: string) => any): Dropzone;

        on(eventName: 'error', callback: (file: Dropzone.DropzoneFile, message: string | Error) => any): Dropzone;
        on(
            eventName: 'errormultiple',
            callback: (files: Dropzone.DropzoneFile[], message: string | Error) => any
        ): Dropzone;

        on(eventName: 'processing', callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
        on(eventName: 'processingmultiple', callback: (files: Dropzone.DropzoneFile[]) => any): Dropzone;

        on(
            eventName: 'uploadprogress',
            callback: (file: Dropzone.DropzoneFile, progress: number, bytesSent: number) => any
        ): Dropzone;
        on(
            eventName: 'totaluploadprogress',
            callback: (totalProgress: number, totalBytes: number, totalBytesSent: number) => any
        ): Dropzone;

        on(
            eventName: 'sending',
            callback: (file: Dropzone.DropzoneFile, xhr: XMLHttpRequest, formData: FormData) => any
        ): Dropzone;
        on(
            eventName: 'sendingmultiple',
            callback: (files: Dropzone.DropzoneFile[], xhr: XMLHttpRequest, formData: FormData) => any
        ): Dropzone;

        on(eventName: 'success', callback: (file: Dropzone.DropzoneFile, response: Object | string) => any): Dropzone;
        on(eventName: 'successmultiple', callback: (files: Dropzone.DropzoneFile[]) => any): Dropzone;

        on(eventName: 'canceled', callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
        on(eventName: 'canceledmultiple', callback: (file: Dropzone.DropzoneFile[]) => any): Dropzone;

        on(eventName: 'complete', callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
        on(eventName: 'completemultiple', callback: (file: Dropzone.DropzoneFile[]) => any): Dropzone;

        on(eventName: 'maxfilesexceeded', callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
        on(eventName: 'maxfilesreached', callback: (files: Dropzone.DropzoneFile[]) => any): Dropzone;
        on(eventName: 'queuecomplete'): Dropzone;

        emit(eventName: 'drop', e: DragEvent): Dropzone;
        emit(eventName: 'dragstart', e: DragEvent): Dropzone;
        emit(eventName: 'dragend', e: DragEvent): Dropzone;
        emit(eventName: 'dragenter', e: DragEvent): Dropzone;
        emit(eventName: 'dragover', e: DragEvent): Dropzone;
        emit(eventName: 'dragleave', e: DragEvent): Dropzone;
        emit(eventName: 'paste', e: DragEvent): Dropzone;

        emit(eventName: 'reset'): Dropzone;

        emit(eventName: 'addedfile', file: Dropzone.DropzoneFile): Dropzone;
        emit(eventName: 'addedfiles', files: Dropzone.DropzoneFile[]): Dropzone;
        emit(eventName: 'removedfile', file: Dropzone.DropzoneFile): Dropzone;
        emit(eventName: 'thumbnail', file: Dropzone.DropzoneFile, dataUrl: string): Dropzone;

        emit(eventName: 'error', file: Dropzone.DropzoneFile, message: string | Error): Dropzone;
        emit(eventName: 'errormultiple', files: Dropzone.DropzoneFile[], message: string | Error): Dropzone;

        emit(eventName: 'processing', file: Dropzone.DropzoneFile): Dropzone;
        emit(eventName: 'processingmultiple', files: Dropzone.DropzoneFile[]): Dropzone;

        emit(eventName: 'uploadprogress', file: Dropzone.DropzoneFile, progress: number, bytesSent: number): Dropzone;
        emit(
            eventName: 'totaluploadprogress',
            totalProgress: number,
            totalBytes: number,
            totalBytesSent: number
        ): Dropzone;

        emit(eventName: 'sending', file: Dropzone.DropzoneFile, xhr: XMLHttpRequest, formData: FormData): Dropzone;
        emit(
            eventName: 'sendingmultiple',
            files: Dropzone.DropzoneFile[],
            xhr: XMLHttpRequest,
            formData: FormData
        ): Dropzone;

        emit(eventName: 'success', file: Dropzone.DropzoneFile, response: object | string): Dropzone;
        emit(eventName: 'successmultiple', files: Dropzone.DropzoneFile[]): Dropzone;

        emit(eventName: 'canceled', file: Dropzone.DropzoneFile): Dropzone;
        emit(eventName: 'canceledmultiple', file: Dropzone.DropzoneFile[]): Dropzone;

        emit(eventName: 'complete', file: Dropzone.DropzoneFile): Dropzone;
        emit(eventName: 'completemultiple', file: Dropzone.DropzoneFile[]): Dropzone;

        emit(eventName: 'maxfilesexceeded', file: Dropzone.DropzoneFile): Dropzone;
        emit(eventName: 'maxfilesreached', files: Dropzone.DropzoneFile[]): Dropzone;
        emit(eventName: 'queuecomplete'): Dropzone;
    }

    // Extend global interfaces if needed
    declare global {
        interface JQuery {
            dropzone(options: DropzoneOptions): Dropzone;
        }

        interface HTMLElement {
            dropzone: Dropzone;
        }
    }
}
