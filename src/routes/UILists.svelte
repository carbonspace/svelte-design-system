<script>
  import CardFooter from '../lib/CardFooter.svelte'
  let showLists = true

  // Headings
  const codeHTML = `<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>

<ol>
  <li>One</li>  
  <li>Two</li>  
  <li>Three</li>  
  <li>Four</li>  
  <li>Five</li>  
</ol>`
</script>

<!-- Lists -->
<div class="card">
  <header class="card-header">
    <p class="card-header-title">Lists</p>
    <button
      class="card-header-icon"
      aria-label="more options"
      on:click={() => (showLists= !showLists)}
    >
      <span class="icon">
        <span class="material-icons-sharp is-size-4">
          {#if showLists}
            expand_more
          {:else}
            expand_less
          {/if}
        </span>
      </span>
    </button>
  </header>
  {#if showLists}
    <div class="card-content">
      <div class="content is-flex is-justify-content-space-evenly">
        <span style="width: 200px;">
          <div class="mb-5 has-text-weight-bold">Unordered List</div>
          <ul style="list-style-type: none;">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ul>          
        </span>
        <span style="width: 200px;">
          <div class="mb-5 has-text-weight-bold">Unordered List</div>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ul>          
        </span>
        <span>
          <div class="mb-5 has-text-weight-bold">Ordered List</div>
          <ol>
            <li>One</li>  
            <li>Two</li>  
            <li>Three</li>  
            <li>Four</li>  
            <li>Five</li>  
          </ol>
        </span>
      </div>
    </div>
  
  <CardFooter
    codeHTML={codeHTML}
    codeCSS=""
    codeJS=""
  />
  {/if}
</div>