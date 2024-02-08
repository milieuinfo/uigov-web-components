export const linkStylesToFeatures = () => {
    document.addEventListener('DOMContentLoaded', async () => {
        const map: any = document.getElementById('map');
        await map?.ready;
        (document.querySelector('#style-1') as any).appliesTo = (feature) => feature.get('styleId') === 'style-1';
        (document.querySelector('#style-2') as any).appliesTo = (feature) => feature.get('styleId') === 'style-2';
        (document.querySelector('#style-3') as any).appliesTo = (feature) => feature.get('styleId') === 'style-3';
    });
};
