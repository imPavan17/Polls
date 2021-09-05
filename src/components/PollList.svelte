<script>
    // import { onMount, onDestroy } from 'svelte';
    import { fade, scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import PollStore from '../store/PollStore'
    import PollDetails from './PollDetails.svelte';

    // let polls = [];

    /** Returns an unsubscription function */
    // const unSub = PollStore.subscribe((data) => {
    //     polls = data
    // });

    // onMount(() => {
        
    // });

    /** Unsubcription is good to avoid memory leaks when the project is huge */
    // onDestroy(() => {
    //     unSub();
    // });
</script>

<div class="polls-list">
    <!-- Instead of sub and un sub via hooks, we can directly refer to PollStore as $PollStore -->
    {#each $PollStore as poll(poll.id)} 
        <div in:fade out:scale|local animate:flip={{ duration: 500 }}> 
            <PollDetails {poll}/>
        </div>
    {/each}
</div>

<style>
    .polls-list {
        display: grid;
        grid-template-columns: 1fr 1fr; /** saying it gonna be 2 columns in a page, each column 1 fraction of the width */
        gap: 20px;
    }
</style>