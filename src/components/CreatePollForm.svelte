<script>
    import PollStore from '../store/PollStore';
    import Button from '../shared/Button.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let fields = {
        question: "",
        answerA: "",
        answerB: ""
    };
    let errors = {
        question: "",
        answerA: "",
        answerB: ""
    };
    let valid = false;

    const handleSubmit = () => {
        valid = true;

        /** QUestion validation */
        if(fields.question.trim().length < 5) {
            valid = false;
            errors.question = "Quesiton must atleast 5 characters.";
        } else {
            errors.question = "";
        }

        /** Answer A validation*/
        if(fields.answerA.trim().length < 1) {
            valid = false;
            errors.answerA = "Answer must atleast 1 characters.";
        } else {
            errors.answerA = "";
        }

        /** Answer B validation*/
        if(fields.answerB.trim().length < 1) {
            valid = false;
            errors.answerB = "Answer must atleast 1 characters.";
        } else {
            errors.answerB = "";
        }

        if(valid) {
            let poll = {
                ...fields,
                votesA: 0,
                votesB: 0,
                id: Math.random(),
            }
            // saving poll to store
            PollStore.update(currentPolls => {
                return [poll, ...currentPolls];
            });
            dispatch('addPoll');
        }
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="question">Poll Question: </label>
    <input type="text" id="question" bind:value={fields.question}/>
    <div class="error">{errors.question}</div>
    <label for="answerA">Answer A: </label>
    <input type="text" id="answerA" bind:value={fields.answerA}/>
    <div class="error">{errors.answerA}</div>
    <label for="answerB">Answer B: </label>
    <input type="text" id="answerB" bind:value={fields.answerB}/>
    <div class="error">{errors.answerB}</div>

    <Button type={"secondary"} flat={true}>Add Poll</Button>
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

    .error {
        color: red;
    }

</style>