<script>
    import { results } from './store.js';
    export let title;
    export let choices;
    export let name;

    let values = [];
    function onChange(event) {
        results.set(name, values)
    }
</script>
<div>
    <h3>{title}</h3>

    <ul>
    {#each choices as { value, text }, i}
        <li>
            <input
                type="checkbox"
                id="{value}"
                value="{value}"
                bind:group={values}
                on:change={onChange}
            />
            <label for="{value}">{text}</label>
        </li>
    {/each}
    </ul>
</div>
