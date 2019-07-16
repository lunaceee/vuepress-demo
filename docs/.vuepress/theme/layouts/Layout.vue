<template>
  <ParentLayout>
    <Foo slot="page-bottom" />
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue"; // Inherit the layout component from the parent theme
import Foo from "@theme/components/Foo.vue"; // Introduce a new component to the layout component

export default {
  components: {
    ParentLayout,
    Foo
  }
};
</script>
