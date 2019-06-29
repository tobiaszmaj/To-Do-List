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

* {
  font-size: 1.5vw;
}

body {
  box-sizing: border-box;
  background-image: url(./assets/background.jpg);
  background-position: top;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  margin: auto;
}

.container {
  background: transparent;
  width: 27vw;
  margin-left: 35vw;
  padding: 12vh 1vw;
}

#app {
  font-family: "Indie Flower", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

@media screen and (max-width: 580px) {
  * {
    font-size: 5vw;
  }

  body {
    background-image: url(./assets/background.jpg);
    background-position: top;
    background-size: 300%;
    background-repeat: no-repeat;
  }

  .container {
    background: transparent;
    width: 100vw;
    margin-left: 2vw;
    padding: 12vh 1vw;
  }
}
</style>
