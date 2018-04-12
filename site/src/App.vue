<template>
  <div id="app">
    <header>Sofa-UI</header>
    <div id="content">
      <nav>
        <ul>
          <li><router-link to="/icon">Icon</router-link></li>
          <li><router-link to="/button">Button</router-link></li>
          <li><router-link to="/input">Input</router-link></li>
        </ul>
      </nav>
      <div id="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    background: #eee;
    font-size: 30px;
    font-weight: bold;
    padding: 20px;
  }

  #content {
    flex-grow: 1;
    display: flex;
    nav {
      width: 100px;
      background: #ddd;
    }
  }
}
</style>
