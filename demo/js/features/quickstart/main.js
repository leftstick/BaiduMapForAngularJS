
import routes from './routes';
import quickstart from './components/quickstart';
import install from './components/subs/install';
import importIt from './components/subs/importIt';
import usage from './components/subs/usage';

export default {
    type: 'feature',
    name: 'quickstart',
    routes,
    component: {
        quickstart,
        install,
        importIt,
        usage
    }
};
