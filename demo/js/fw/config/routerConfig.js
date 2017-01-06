import {omit, pluck} from '../helper/object';

import Things from 'features/main';

export default {
    type: 'configure',
    config($locationProvider, $routeProvider) {
        'ngInject';

        const features = Things.filter(t => t.type === 'feature');
        if (!features || features.length === 0) {
            console.warn('No features loaded');
            return;
        }

        const routes = findRoutes(features);

        const defaultRoutes = routes.filter(route => route.isDefault);

        startupWarning(routes, defaultRoutes);

        config(routes, $routeProvider, $locationProvider);
    }
};


function findRoutes(features) {
    return features
        .filter(feature => feature.routes && feature.routes.length > 0)
        .map(feature => feature.routes)
        .reduce((previous, current) => previous.concat(current), []);
}

function startupWarning(routes, defaultRoutes) {
    if (defaultRoutes.length === 0) {
        console.warn('There is no any default route set. Try setting isDefault to the route you preferred');
    } else if (defaultRoutes.length > 1) {
        const defaultWhens = pluck(defaultRoutes, 'when');
        console.warn('You have set [' + defaultRoutes.length + '] default routes, they are [' + defaultWhens.join(', ') + ']. Try to correct it');
    }

    const routeWhens = pluck(routes, 'when').sort();

    for (let i = 0; i < routeWhens.length - 1; i++) {
        if (routeWhens[i] === routeWhens[i + 1]) {
            throw new Error('Duplicated Route: [ ' + routeWhens[i] + ' ]');
        }
    }
}

function config(routes, $routeProvider, $locationProvider) {
    //config each router
    routes.forEach(function(ro) {
        $routeProvider
            .when(ro.when, omit(ro, ['when']));
    });

    //config default page
    var defaultRouter = routes.filter(route => route.isDefault)[0];
    if (defaultRouter) {
        $routeProvider.otherwise({
            redirectTo: defaultRouter.when
        });
    }


    $locationProvider.html5Mode(false);
}