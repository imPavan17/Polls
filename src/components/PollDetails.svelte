<script>
    export let poll;

    // Reactive values
    $: totalVotes = poll.votesA + poll.votesB;
</script>

<div class="poll">
    <h3>{poll.question}</h3>
    <p>Total Votes: {totalVotes}</p>
    <div class="answer">
        <div class="percent percent-a">
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
    </div>
    <div class="answer">
        <div class="percent percent-a">
            <span>{poll.answerB} ({poll.votesB})</span>
        </div>
    </div>
</div>

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