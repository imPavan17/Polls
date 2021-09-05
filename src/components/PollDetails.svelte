<script>
    import { createEventDispatcher } from 'svelte';
    import Card from '../shared/Card.svelte'

    export let poll;
    const dispatch = createEventDispatcher();

    // Reactive values
    $: totalVotes = poll.votesA + poll.votesB;

    const handleVote = (option, id) => {
        dispatch('vote', { option, id })
    }
</script>

<Card>
    <div>
        <h3>{poll.question}</h3>
        <p>Total Votes: {totalVotes}</p>
        <div class="answer" on:click={() => handleVote('a', poll.id)}>
            <div class="percent percent-a">
                <span>{poll.answerA} ({poll.votesA})</span>
            </div>
        </div>
        <div class="answer" on:click={() => handleVote('b', poll.id)}>
            <div class="percent percent-a">
                <span>{poll.answerB} ({poll.votesB})</span>
            </div>
        </div>
    </div>
</Card>

<style>
    p {
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }

    span {
        display: inline-block;
        padding: 10px 20px;
    }

    .answer {
        background-color: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }

    .answer:hover {
        opacity: 0.6;
    }

</style>