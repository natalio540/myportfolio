<template>
  <div id="nav">
    <Nav />
    
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/blog">Blog</router-link> -->
  </div>
  <router-view/>
  <Footer/>
</template>



<script>
// @ is an alias to /src
import Nav from './components/Nav'
import Footer from './components/Footer'

export default {
  components: {
    Nav,
    Footer

  },

}
</script>

<style>

@import 'assets/styles/styles.css';
@import 'assets/styles/dev-styles.css';
@import 'assets/styles/design-styles.css';
@import 'assets/styles/illustrations.css';

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
