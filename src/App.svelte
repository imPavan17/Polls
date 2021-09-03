<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte'

	//tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeTab = 'Current Polls';

	//To togggle current tab
	const toggleTab = ({ detail }) => {
		activeTab = detail;
	}
</script>

<Header />
<main>
	<Tabs {items} {activeTab} on:toggleTab={(e) => toggleTab(e)}/>
	
	{#if activeTab === 'Current Polls'}
		<p>Poll list</p>
	{:else}
		<CreatePollForm />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>