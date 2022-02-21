<script>
    import Checkbox from './Checkbox.svelte';
    import Radiogroup from './Radiogroup.svelte';
    import { get } from 'svelte/store';
    import { results } from './store.js';

    let resultsValue;

    results.subscribe(value => {
        resultsValue = JSON.stringify(Object.fromEntries(value), null, 2);
    });
</script>

<pre>
{resultsValue}
</pre>

<Radiogroup
    title="Quelle est ton expérience [SQL](https://fr.wikipedia.org/wiki/Structured_Query_Language) ?"
    name="sql_experience"
    choices={[
        {
            "value": "sql_0",
            "text": "Je ne connais pas du tout le langage SQL"
        },
        {
            "value": "sql_1",
            "text": "J'ai une connaissance théorique du langage SQL mais je n'ai jamais vraiment pratiqué"
        },
        {
            "value": "sql_2",
            "text": "J'ai déjà fait un petit [POC](https://fr.wikipedia.org/wiki/Preuve_de_concept) perso en SQL"
        },
        {
            "value": "sql_3",
            "text": "J'ai déjà mis en pratique le langage SQL professionnelement"
        }
    ]}
/>

<Checkbox
    title="Tes compétences SQL"
    name="sql_skills"
    choices={[
        {
            "value": "sql_data_modeling",
            "text": "J'ai déjà modélisé un modèle de données"
        },
        {
            "value": "sql_advanced_query",
            "text": "Je n'ai pas de difficultés pour écrire des requêtes SQL avancées (jointures, group by…)"
        },
        {
            "value": "sql_index",
            "text": "Je comprends comment optimiser un modèle de données (définir des index pertinents)"
        },
        {
            "value": "sql_migration",
            "text": "Je sais comment écrire des migrations de données (en prenant en compte les contraintes de productions)"
        }
    ]}
/>
