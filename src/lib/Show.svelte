<script>
  // Show.svelte
  export let show = true;
</script>

<div class:hide={!show}>
  <slot />
</div>

<style>
  .hide {
    display: none !important;
  }
</style>
