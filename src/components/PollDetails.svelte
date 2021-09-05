<script>
    import { createEventDispatcher } from 'svelte';
    import Card from '../shared/Card.svelte'

    export let poll;
    const dispatch = createEventDispatcher();

    // Reactive values
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor(100 / totalVotes * poll.votesA);
    $: percentB = Math.floor(100 / totalVotes * poll.votesB);

    $: {
        console.log(percentA, percentB);
    }
    const handleVote = (option, id) => {
        dispatch('vote', { option, id })
    }
</script>

<Card>
    <div>
        <h3>{poll.question}</h3>
        <p>Total Votes: {totalVotes}</p>
        <div class="answer" on:click={() => handleVote('a', poll.id)}>
            <div class="percent percent-a" style="width: {percentA}%"></div>
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
        <div class="answer" on:click={() => handleVote('b', poll.id)}>
            <div class="percent percent-b" style="width: {percentB}%"></div>
            <span>{poll.answerB} ({poll.votesB})</span>
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

    .percent {
        height: 100%;
        position: absolute;
    }

    .percent-a {
        background-color: rgba(217,27,66,0.2)
    }

    .percent-b {
        background-color: rgba(69,196,150,0.2);
    }

</style>