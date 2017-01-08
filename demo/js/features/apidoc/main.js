
import routes from './routes';
import apidoc from './components/apidoc';
import apiSidebar from './components/subs/apiSidebar';
import apiContent from './components/subs/apiContent';

export default {
    type: 'feature',
    name: 'apidoc',
    routes,
    component: {
        apidoc,
        apiSidebar,
        apiContent
    }
};
