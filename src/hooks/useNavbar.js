import { useEffect } from 'react';

/**
 * Locks/unlocks body scroll when `isLocked` is true.
 */
export function useLockBodyScroll(isLocked) {
    useEffect(() => {
        const original = document.body.style.overflow;
        if (isLocked) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = original;
        };
    }, [isLocked]);
}

/**
 * Calls `handler` when the Escape key is pressed.
 */
export function useEscapeKey(handler) {
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') handler();
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [handler]);
}

/**
 * Calls `handler` when a click/touch is registered outside of `ref`.
 */
export function useOutsideClick(ref, handler, enabled = true) {
    useEffect(() => {
        if (!enabled) return;
        const listener = (e) => {
            if (!ref.current || ref.current.contains(e.target)) return;
            handler();
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler, enabled]);
}
