<script>
    import { tweened } from 'svelte/motion';
    import PollStore from '../store/PollStore';
    import Card from '../shared/Card.svelte';
    import Button from '../shared/Button.svelte';

    export let poll;

    // Reactive values
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor(100 / totalVotes * poll.votesA);
    $: percentB = Math.floor(100 / totalVotes * poll.votesB);

    // Tweened values
    const tweenedA = tweened(0);
    const tweenedB = tweened(0);
    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);

    const handleVote = (option, id) => {
        PollStore.update(currentPolls => {
            let pollsClone = [...currentPolls];
            let upVotedPoll = pollsClone.find(poll => poll.id === id);
            
            if(option === 'a') {
                upVotedPoll.votesA ++;
            }
            if(option === 'b') {
                upVotedPoll.votesB ++;
            }
            return pollsClone;
        });
    }

    // Delete a poll
    const handleDelete = (id) => {
        PollStore.update(currentPolls => {
            let currentPollsClone = currentPolls.filter(poll => poll.id !== id);
            return currentPollsClone;
        })
    }
</script>

<Card>
    <div>
        <h3>{poll.question}</h3>
        <p>Total Votes: {totalVotes}</p>
        <div class="answer" on:click={() => handleVote('a', poll.id)}>
            <div class="percent percent-a" style="width: {$tweenedA}%"></div>
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
        <div class="answer" on:click={() => handleVote('b', poll.id)}>
            <div class="percent percent-b" style="width: {$tweenedB}%"></div>
            <span>{poll.answerB} ({poll.votesB})</span>
        </div>
        <Button flat={true} on:click={() => handleDelete(poll.id)}>Delete</Button>
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