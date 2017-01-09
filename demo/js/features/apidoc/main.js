
import routes from './routes';
import apidoc from './components/apidoc';
import apiSidebar from './components/subs/apiSidebar';
import apiContent from './components/subs/apiContent';
import docBaiduMap from './components/subs/apiContent/subs/docBaiduMap';
import docMapOptions from './components/subs/apiContent/subs/docMapOptions';
import docCenterAndZoom from './components/subs/apiContent/subs/docCenterAndZoom';

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
        docCenterAndZoom
    }
};
