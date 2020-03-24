<script>
	import Nav from '@components/MitrolNav.svelte';
	import Footer from '@components/Footer.svelte';

	export let segment;
</script>
<style>
#separator {
  height: 150px;
}
</style>


<!-- se toman los estilos de main de fedex, los de abajo son los originales de sapper y rompen el dom -->
<!-- <style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style> -->

<Nav {segment}/>

<main>
	<slot></slot>
</main>
<div id="separator" />
<Footer />