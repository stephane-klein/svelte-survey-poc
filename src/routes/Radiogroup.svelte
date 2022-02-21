<script>
    import { results } from './store.js';

    export let title;
    export let name;
    export let choices;

    function onChange(event) {
        results.set(event.target.name, event.target.value)
    }

</script>
<div>
    <h3>{title}</h3>

    <ul>
    {#each choices as { value, text }, i}
        <li>
            <input
                type="radio"
                id="{value}"
                value="{value}"
                name="{name}"
                on:change={onChange}
            />
            <label for="{value}">{text}</label>
        </li>
    {/each}
    </ul>
</div>
