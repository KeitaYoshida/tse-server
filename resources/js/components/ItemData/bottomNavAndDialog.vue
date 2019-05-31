<template>
  <v-bottom-nav fixed color="transparent" :value="true">
    <v-btn
      v-for="(item, index) in btn_nav.config"
      :key="index"
      v-on:click="$emit('pflag', item.code)"
    >
      <span>{{ item.name }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {
  props: ["btn_nav"]
};
</script>