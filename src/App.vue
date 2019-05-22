<template>
  <div id="app" class="container">
    <todo-list></todo-list>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    HelloWorld,
    TodoList
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Indie+Flower&display=swap");

body {
  box-sizing: border-box;
  background-image: url(./assets/background.jpg);
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  margin: auto;
}

.container {
  background: transparent;
  font-size: 20px;
  width: 27rem;
  margin-left: 28.5rem;
  padding: 5rem 1em;
}

#app {
  font-family: "Indie Flower", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
  font-size: 28px;
}
</style>
