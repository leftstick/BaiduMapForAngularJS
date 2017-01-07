
import routes from './routes';
import quickstart from './components/quickstart';
import install from './components/subs/install';

export default {
    type: 'feature',
    name: 'quickstart',
    routes,
    component: {
        quickstart,
        install
    }
};
