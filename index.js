/**
 * MiniDebounce
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default function miniDebounce (callback, timeout) {
    let currentTimeout;

    return e => {
        if (!currentTimeout) {
            currentTimeout = setTimeout(() => {
                callback(e);
                currentTimeout = null;
            }, timeout);
        }
    }
}