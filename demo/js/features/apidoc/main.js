
import routes from './routes';
import apidoc from './components/apidoc';
import apiSidebar from './components/subs/apiSidebar';
import apiContent from './components/subs/apiContent';
import docBaiduMap from './components/subs/apiContent/subs/docBaiduMap';
import docMapOptions from './components/subs/apiContent/subs/docMapOptions';
import docCenterAndZoom from './components/subs/apiContent/subs/docCenterAndZoom';
import docMarker from './components/subs/apiContent/subs/docMarker';
import docPoint from './components/subs/apiContent/subs/docPoint';
import docMarkerOptions from './components/subs/apiContent/subs/docMarkerOptions';
import docSize from './components/subs/apiContent/subs/docSize';
import docIcon from './components/subs/apiContent/subs/docIcon';
import docControl from './components/subs/apiContent/subs/docControl';
import docOverlay from './components/subs/apiContent/subs/docOverlay';

export default {
    type: 'feature',
    name: 'apidoc',
    routes,
    component: {
        apidoc,
        apiSidebar,
        apiContent,
        docBaiduMap,
        docMapOptions,
        docCenterAndZoom,
        docMarker,
        docPoint,
        docMarkerOptions,
        docSize,
        docIcon,
        docControl,
        docOverlay
    }
};
