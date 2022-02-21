import { writable } from 'svelte/store';

function createResults() {
    const { subscribe, set, update } = writable(new Map());

    return {
        subscribe,
        set: (name, value) => update(
            m => {
                console.log('set', name, value);
                console.log(m);
                return new Map(m.set(name, value));
            }
        ),
        reset: () => map()
    };
}

export const results = createResults();
