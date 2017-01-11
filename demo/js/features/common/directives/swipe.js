if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {
        }
        return i > -1;
    };
}

export default {
    type: 'directive',
    name: 'swipe',

    directiveFactory: function() {
        return {
            restrict: 'A',
            scope: {
                swipe: '&',
                skipSelectors: '<'
            },
            link($scope, element, attrs) {
                const minDistanceXAxis = 30;
                const maxDistanceYAxis = 30;
                const maxAllowedTime = 1000;

                let touchStartCoords = {
                    x: -1,
                    y: -1
                };
                let touchEndCoords = {
                    x: -1,
                    y: -1
                };
                let direction = 'undefined';
                let startTime = 0;
                let elapsedTime = 0;

                function swipeStart(e) {
                    let evt = e || window.event;
                    if (matchSkipSelectors(evt.target, $scope.skipSelectors)) {
                        return;
                    }
                    evt = ('changedTouches' in evt) ? evt.changedTouches[0] : evt;
                    touchStartCoords = {
                        x: evt.pageX,
                        y: evt.pageY
                    };
                    startTime = new Date().getTime();
                }

                function swipeMove(e) {
                    let evt = e || window.event;
                    if (matchSkipSelectors(evt.target, $scope.skipSelectors)) {
                        return;
                    }
                }

                function swipeEnd(e) {
                    let evt = e || window.event;
                    if (matchSkipSelectors(evt.target, $scope.skipSelectors)) {
                        return;
                    }
                    evt = ('changedTouches' in evt) ? evt.changedTouches[0] : evt;
                    touchEndCoords = {
                        x: evt.pageX - touchStartCoords.x,
                        y: evt.pageY - touchStartCoords.y
                    };
                    elapsedTime = new Date().getTime() - startTime;

                    if (elapsedTime > maxAllowedTime) {
                        return;
                    }
                    if (Math.abs(touchEndCoords.x) >= minDistanceXAxis && Math.abs(touchEndCoords.y) <= maxDistanceYAxis) {
                        direction = (touchEndCoords.x < 0) ? 'left' : 'right';
                        if (direction !== 'left' && direction !== 'right') {
                            return;
                        }
                        $scope.swipe({
                            direction
                        });
                        $scope.$apply();
                    }
                }

                element[0].addEventListener('touchstart', swipeStart);
                element[0].addEventListener('touchmove', swipeMove);
                element[0].addEventListener('touchend', swipeEnd);

                $scope.$on('$destroy', function() {
                    element[0].removeEventListener('touchstart', swipeStart);
                    element[0].removeEventListener('touchmove', swipeMove);
                    element[0].removeEventListener('touchend', swipeEnd);
                });
            }
        };
    }
};

function matchSkipSelectors(target, selectors) {
    return !!selectors.filter(s => isIncluded(target, s)).length;
}

function isIncluded(target, selector) {
    if (target.matches(selector)) {
        return true;
    }
    let parent;
    //eslint-disable-next-line
    while ((parent = (parent || target).parentNode) && parent.tagName !== 'BODY') {
        if (parent.matches(selector)) {
            return true;
        }
    }
    return false;
}
