<script>
    import { count } from './store.js';
    const handleIncrement = () => {
        count.update(n => n + 1);
    };
    const handleReset = () => {
        count.set(0);
    };

</script>

<svelte:head>
    <title>Click Counter</title>
</svelte:head>

<main>
    <span id="click-count">{$count}</span>
    <div class="buttons">
        <button name="click-increment" on:click={handleIncrement}>Increment</button>
        <button name="click-reset" on:click={handleReset}>Reset</button>
    </div>
</main>

<style>
    main {
        text-align: center;
        margin: 2rem auto;
        max-width: 300px;
        padding: 1rem;
    }

    #click-count {
        font-size: 2rem;
        margin-bottom: 1rem;
        display: block;
    }

    .buttons {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    button {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
</style>
