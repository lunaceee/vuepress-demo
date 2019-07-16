<template>
  <div class="foo-body">
    <button class="click-me">I'm fool</button>
    <button class="not-click-me">I'm not a fool!</button>
  </div>
</template>

<script>
import Foo from "./Foo";
export default {
  components: {
    Foo
  }
};
</script>

<style lang="postcss">
.foo-body {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding: 3rem;
  border-radius: 0.4rem;
  display: flex;
  width: 20vw;
  margin: auto;
  justify-content: center;
  flex-direction: column;
}

button {
  padding: 1rem;
  margin: 0.4rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  background-color: white;
  border: 1px solid grey;
  cursor: pointer;
  min-width: 10rem;
}

button.click-me {
  color: white;
  background-color: teal;
}
</style>
