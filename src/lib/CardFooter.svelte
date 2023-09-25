<script>
// @ts-nocheck

  import Prism from "prismjs"
  import "prism-svelte"

  // Initialize
  export let codeHTML
  export let codeCSS
  export let codeJS
  export let showCodeHTML = false
  export let showCodeCSS = false
  export let showCodeJS = false

  // Active SVG
  import htmlBrand from '../assets/html5.svg'  
  import cssBrand from '../assets/css3.svg'  
  import jsBrand from '../assets/javascript.svg'

  // Inactive SVG
  import htmlBrandInactive from '../assets/html5-inactive.svg'
  import cssBrandInactive from '../assets/css3-inactive.svg'
  import jsBrandInactive from '../assets/javascript-inactive.svg'

  // Render HTML
  export const highlightedHTML = Prism.highlight(
    codeHTML,
    Prism.languages.html,
    "html"
  )

  // Render CSS
  export const highlightedCSS = Prism.highlight(
    codeCSS,
    Prism.languages.css,
    "css"
  )

  // RenderJS
  export const highlightedJS = Prism.highlight(
    codeJS,
    Prism.languages.js,
    "js"
  )

  /**
     * @param {string} code
  */
  function viewCode(code, showSnip) {
    if (code != '') {
      // console.log(code);
      if (showSnip == 'HTML') {
        showCodeHTML = !showCodeHTML
      } else if (showSnip == 'CSS') {
        showCodeCSS = !showCodeCSS
      } else if (showSnip == 'JS') {
        showCodeJS = !showCodeJS;
      }      
    } else {
      return false
    }
  }
  
  // TODO: fix this
  function onKeyDown(e) {
    switch(e.keyCode) {
      // Arrow Up
      case 38:
        console.log('Arrow Down')
        // dynamically call viewCode() with HTML, CSS or JS as the showSnip param
        break;
      // Arrow Down
      case 40:
        console.log('Arrow Up'); 
        break;
    }
  }
</script>

<footer class="card-footer">
  <button class="card-footer-item {codeHTML != '' ? '' : 'inactive'}" 
    on:click={viewCode(codeHTML, 'HTML')} on:keydown|preventDefault={onKeyDown}>
    <img src={codeHTML != '' ? htmlBrand : htmlBrandInactive} class="card-footer-item-logo" alt="HTML" />
  </button>
  <button class="card-footer-item {codeCSS != '' ? '' : 'inactive'}" 
    on:click={viewCode(codeHTML, 'CSS')}>
    <img src={codeCSS != '' ? cssBrand : cssBrandInactive} class="card-footer-item-logo" alt="CSS" />
  </button>
  <button class="card-footer-item {codeJS != '' ? '' : 'inactive'}" 
    on:click={viewCode(codeHTML, 'JS')}>
    <img src={codeJS != '' ? jsBrand : jsBrandInactive} class="card-footer-item-logo" alt="JS" />
</button>
</footer>
{#if showCodeHTML}
  <div class="card-content flat">
    <div class="content">
      <pre class="language-html"><code>{@html highlightedHTML}</code></pre>
    </div>
  </div>
{/if}
{#if showCodeCSS}
<div class="card-content flat">
  <div class="content">
    <pre class="language-css"><code>{@html highlightedCSS}</code></pre>
  </div>
</div>
{/if}
{#if showCodeJS}
<div class="card-content flat">
  <div class="content">
    <pre class="language-js"><code>{@html highlightedJS}</code></pre>
  </div>
</div>
{/if}

<style>
  button {
    cursor: pointer;
  }
  button.inactive {
    border: none;
  }
  .card-footer-item,
  .card-footer-item:link,
  .card-footer-item:visited,
  .card-footer-item.inactive:hover {
    background-color: #fff;
  }
  .card-footer-item:hover,
  .card-footer-item:active {
    background-color: #f5f5f5;
  }
  .card-footer-item:active {
    background-color: #f1f1f1;
  }
</style>