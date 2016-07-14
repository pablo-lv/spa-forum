/**
 * Created by paul on 14/07/16.
 */

import moment from 'moment';

export function fromNow (time) {
    return moment(time, 'X').fromNow();
}

export function largeNumber (number) {
    if (number > 999999) {
        return (number / 1000000).toFixed(1) + 'M';
    }

    if (number > 999) {
        return (number / 1000).toFixed(1) + 'k';
    }

    return number;
}