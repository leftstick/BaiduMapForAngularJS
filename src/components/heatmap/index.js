import load from '../../helper/heatmapScriptLoader';


export function createHeatmapOverlay(options) {
    return load()
        .then(() => {
            return new BMapLib.HeatmapOverlay(options);
        });
}
