import flatpickr from 'flatpickr';

export const formatEpoch = (epoch: number | string | symbol, format: string | symbol) => {
    if (epoch && (typeof epoch === 'string' || typeof epoch === 'number')) {
        // @ts-ignore
        const dateFormat = format && typeof format !== 'symbol' ? format : 'd.m.Y';
        return flatpickr.formatDate(new Date(Number(epoch)), dateFormat);
    } else {
        return undefined;
    }
};

export const formatTime = (time: string | symbol) => {
    if (time && typeof time === 'string') {
        return flatpickr.formatDate(new Date(`1970-01-01T${time}`), 'H:i');
    } else {
        return undefined;
    }
};
