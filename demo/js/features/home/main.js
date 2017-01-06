
import routes from './routes';
import home from './components/home';
import github from './components/subs/github';

export default {
    type: 'feature',
    name: 'home',
    routes,
    component: {
        home,
        github
    }
};
