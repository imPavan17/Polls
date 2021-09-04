<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';
	import PollList from './components/PollList.svelte';

	//tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeTab = 'Current Polls';

	//Polls
	let polls = [
		{ 
			id: 1,
			question: 'Messi or Ronaldo',
			answerA: 'Messi',
			answerB: 'Ronaldo',
			votesA: 12,
			votesB: 13,
		}
	]

	//To togggle current tab
	const toggleTab = ({ detail }) => {
		activeTab = detail;
	}

	//Adding poll
	const handleAddPoll = ({ detail }) => {
		polls = [detail, ...polls];
		activeTab = 'Current Polls';
	}
</script>

<Header />
<main>
	<Tabs {items} {activeTab} on:toggleTab={(e) => toggleTab(e)}/>
	
	{#if activeTab === 'Current Polls'}
		<PollList {polls}/>
	{:else}
		<CreatePollForm on:addPoll={(e) => handleAddPoll(e)}/>
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>