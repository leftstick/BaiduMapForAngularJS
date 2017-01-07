
import routes from './routes';
import home from './components/home';
import github from './components/subs/github';
import about from './components/subs/about';
import version from './components/subs/version';
import contribution from './components/subs/contribution';

export default {
    type: 'feature',
    name: 'home',
    routes,
    component: {
        home,
        github,
        about,
        version,
        contribution
    }
};
