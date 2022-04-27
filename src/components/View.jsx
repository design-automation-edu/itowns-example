
import { useEffect, useRef } from "react";
import * as ITOWNS from "itowns";


// ----------------------------------------------------------------------------
// React Component for ITowns View
// ----------------------------------------------------------------------------
export function View() {
    const refContainer = useRef();
  
    useEffect(() => {
      const { current: container } = refContainer;
      if (container) {
        const placement = {
            coord: new ITOWNS.Coordinates('EPSG:4326', 2.35, 48.8),
            range: 25e6
        };
        const view = new ITOWNS.GlobeView(container, placement);
        // add tile map
        var layer = _getViewColorLayer();
        view.addLayer(layer);
        // CLEAN UP
        return () => {
          view.dispose();
          while (container.firstChild) {
            container.removeChild(container.lastChild);
          }
        };
      }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    // RETURN COMPONENT
    return (
      <div
        id='itowns'
        ref={refContainer}
      />
    );
};
  
// PRIVATE METHODS
function _getViewColorLayer() {
    return new ITOWNS.ColorLayer('ColorLayer', {
        source: new ITOWNS.TMSSource({
            name: 'Google Map - Satellite Only',
            crs: 'EPSG:3857',
            format: 'image/jpg',
            url: 'https://mt1.google.com/vt/lyrs=s&x=${x}&y=${y}&z=${z}', 
            attribution: {
                name: 'Google Map - Satellite Only',
                html: 'Map data ©2019 <a href="https://www.google.com/">Google</a>',
            },
            tileMatrixSet: 'PM',
        })
    });
}