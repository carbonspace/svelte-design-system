<script lang="ts">
  import CardFooter from '../lib/CardFooter.svelte'
  let showHeadings = true
  // Headings
  const codeHTML = `<h1>H1 Headline H1</h1>
<h2>H2 Headline H2</h2>
<h3>H3 Headline H3</h3>
<h4>H4 Headline H4</h4>
<h5>H5 Headline H5</h5>
<h6>H6 Headline H6</h6>`

  const codeCSS = `/* Headings */
h1, h2, h3, h4, h5 {
  font-weight: bold;
}

h1 {
  font-size: 2.2em;
  line-height: 1;
  margin-bottom: 0.25em;
}

h2 {
  font-size: 1.6em;
  line-height: 1.1;
  margin-bottom: 0.25em;
}

h3 {
  font-size: 1.3em;
  line-height: 1;
  margin-bottom: 0.25em;
}

h4 {
  font-size: 1.1em;
  line-height: 1.25;
  margin-bottom: 0.25em;
}

h5 {
  font-size: 1em;
  margin-bottom: 0.25em;
}

h6 {
  font-size: 1em;
  margin-bottom: 0.25em;
}`
</script>

<!-- Headings -->
<div class="card">
  <header class="card-header">
    <p class="card-header-title">Headings</p>
    <button
      class="card-header-icon"
      aria-label="more options"
      on:click={() => (showHeadings = !showHeadings)}
    >
      <span class="icon">
        <span class="material-icons-sharp is-size-4">
          {#if showHeadings}
            expand_more
          {:else}
            expand_less
          {/if}
        </span>
      </span>
    </button>
  </header>
  {#if showHeadings}
    <div class="card-content">
      <div class="content">
        <h1>H1 Headline H1</h1>
        <h2>H2 Headline H2</h2>
        <h3>H3 Headline H3</h3>
        <h4>H4 Headline H4</h4>
        <h5>H5 Headline H5</h5>
        <h6>H6 Headline H6</h6>
      </div>
    </div>
  <CardFooter
    codeHTML={codeHTML}
    codeCSS={codeCSS}
    codeJS=""
  />
  {/if}
</div>