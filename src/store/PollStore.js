import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Messi or Ronaldo",
    answerA: "Messi",
    answerB: "Ronaldo",
    votesA: 12,
    votesB: 13,
  },
]);

export default PollStore;
