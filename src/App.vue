<template>
	<div id="app">
		<Header />
		<!-- <ItemsContainer /> -->
		<DetailContainer />
	</div>
</template>

<script>
import Header from './components/Header.vue'
// import ItemsContainer from './components/ItemsContainer.vue'
import DetailContainer from './components/DetailContainer.vue'

export default {
	name: 'App',
	components: {
		Header,
		// ItemsContainer,
		DetailContainer
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
	margin-top: 60px;
}
</style>
