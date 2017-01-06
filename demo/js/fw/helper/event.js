/**
 *  Collection of Event helpers
 *
 *  @author  howard
 *  @date    Jan 5, 2017
 *
 */
export function stop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (e.preventDefault) {
        e.preventDefault();
    }
}
