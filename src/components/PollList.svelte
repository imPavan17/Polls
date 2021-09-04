<script>
    export let polls = [];
</script>

<div class="polls-list">
    {#each polls as poll(poll.id)}
        <div>
            {poll.question}
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