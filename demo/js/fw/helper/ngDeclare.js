
import angular from 'angular';
import {isArray, isObject, isInjectedFunction, flatten} from './object';

const FEATURE_SET = [
    'provider', 'factory', 'service', 'decorator',
    'value', 'constant',
    'animation',
    'filter',
    'controller',
    'directive', 'component'
];
const FUNCTIONS_SET = ['provider', 'factory', 'service', 'decorator', 'animation', 'filter', 'controller', 'directive'];
const ANYTHING_SET = ['value', 'constant', 'component'];
const NO_KEY_SET = ['run', 'config'];
export function declareFeatures(features) {
    features
        .map(feature => ({
            feature: feature,
            defines: getDefinedPairs(feature, FEATURE_SET)
        }))
        .forEach(obj => {
            const featureModule = angular.module(obj.feature.name, []);
            const defines = getDefinedMethods(obj.feature, NO_KEY_SET);
            defines.forEach(def => {
                featureModule[def.method](def.value);
            });
            obj
                .defines
                .forEach(defined => {
                    if (FUNCTIONS_SET.includes(defined.method)) {
                        if (isInjectedFunction(defined.value)) {
                            return featureModule[defined.method](defined.key, defined.value);
                        } else {
                            console.warn(`[${defined.key}] is not a proper factory method`);
                        }
                    }
                    if (ANYTHING_SET.includes(defined.method)) {
                        return featureModule[defined.method](defined.key, defined.value);
                    }
                });
        });
}

const VALUE_SET = ['value', 'constant'];
export function declareValues(app, valueObjs) {
    valueObjs
        .map(valueObj => getDefinedPairs(valueObj, VALUE_SET))
        .reduce(flatten, [])
        .forEach(obj => {
            return app[obj.method](obj.key, obj.value);
        });
}

export function declareDirectives(app, directives) {
    directives
        .filter(dir => {
            const shouldUse = isInjectedFunction(dir.directiveFactory) && dir.name;
            if (!shouldUse) {
                console.warn('directive defined without property [name], or method [directiveFactory]');
            }
            return shouldUse;
        })
        .forEach(dir => {
            return app.directive(dir.name, dir.directiveFactory);
        });
}

export function declareComponents(app, components) {
    components
        .filter(dir => {
            const shouldUse = isObject(dir.componentDefinitionObject) && dir.name;
            if (!shouldUse) {
                console.warn('component defined without property [name], or [componentDefinitionObject]');
            }
            return shouldUse;
        })
        .forEach(dir => {
            return app.component(dir.name, dir.componentDefinitionObject);
        });
}

export function declareRunners(app, runners) {
    runners
        .filter(runner => {
            const shouldUse = isInjectedFunction(runner.run);
            if (!shouldUse) {
                console.warn('runner defined without run method');
            }
            return shouldUse;
        })
        .forEach(runner => {
            app.run(runner.run);
        });
}

export function declareFilters(app, filters) {
    filters
        .filter(dir => {
            const shouldUse = isInjectedFunction(dir.filterFactory) && dir.name;
            if (!shouldUse) {
                console.warn('filter defined without property [name], or method [filterFactory]');
            }
            return shouldUse;
        })
        .forEach(dir => {
            return app.filter(dir.name, dir.filterFactory);
        });
}

function getDefinedPairs(valueObj, SETS) {
    return Object
        .keys(valueObj)
        .filter(method => SETS.includes(method) && Object.keys(valueObj[method]).length)
        .map(method => ({
            method,
            defines: valueObj[method]
        }))
        .map(combine => {
            return Object
                .keys(combine.defines)
                .map(key => ({
                    method: combine.method,
                    key,
                    value: combine.defines[key]
                }));
        })
        .reduce(flatten, []);
}

function getDefinedMethods(valueObj, SETS) {
    return Object
        .keys(valueObj)
        .filter(key => SETS.includes(key) && (isArray(valueObj[key] || isInjectedFunction(valueObj[key]))))
        .map(method => {
            if (isInjectedFunction(valueObj[method])) {
                return [{
                    method: method,
                    value: valueObj[method]
                }];
            }
            return valueObj[method]
                .filter(v => isInjectedFunction(v))
                .map(v => ({
                    method: method,
                    value: v
                }));
        })
        .reduce(flatten, []);
}
