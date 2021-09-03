<script>
    let fields = {
        question: "",
        answerA: "",
        answerB: ""
    };

    const handleSubmit = () => {
        console.log(fields);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="question">Poll Question: </label>
    <input type="text" id="question" bind:value={fields.question}/>
    <label for="answerA">Answer A: </label>
    <input type="text" id="answerA" bind:value={fields.answerA}/>
    <label for="answerB">Answer B: </label>
    <input type="text" id="answerB" bind:value={fields.answerB}/>

    <button>Add Poll</button>
</form>

<style>
    form {
        margin: 0 190px;
    }

    input {
        width: 100%;
        border-radius: 5px;
    }

    label {
        margin: 10px auto;
    }

</style>