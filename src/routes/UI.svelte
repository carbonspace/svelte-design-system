<script>
  // @ts-nocheck
  import Prism from "prismjs"
  import "prism-svelte"

  import UiHeadings from "./UIHeadings.svelte"
  import UiParagraphs from "./UIParagraphs.svelte";
  import UiLists from "./UILists.svelte";
  import UiInline from "./UIInline.svelte";
</script>

<!-- <section class="section is-title-bar">
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <ul>
          <li>DS</li>
          <li>UI Elements</li>
        </ul>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item" />
    </div>
  </div>
</section> -->
<section class="hero is-hero-bar">
  <div class="hero-body">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 class="title">UI Elements</h1>
        </div>
      </div>
      <div class="level-right" style="display: none;">
        <div class="level-item" />
      </div>
    </div>
  </div>
</section>

<section class="section is-component-section">
  <UiHeadings />
  <UiParagraphs />
  <UiLists />
  <UiInline />
</section>

<style>
  :global(.tag:not(body)) {
    background-color: transparent;
    font-size: 1rem;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  :global(.token.number) {
    background-color: transparent;
    font-size: 1rem;
    height: unset;
    min-width: unset;
    vertical-align: unset;
    margin-right: unset;
    padding: unset;
  }
  :global(.token.attr-name) {
    margin-left: 0.75rem;
  }

  :global(.token.comment)
    :global(.token.block-comment)
    :global(.token.prolog)
    :global(.token.doctype)
    :global(.token.cdata) {
    color: #999;
  }

  :global(.token.punctuation) {
    color: #ccc;
  }

  :global(.token.tag),
  :global(.token.attr-name),
  :global(.token.namespace),
  :global(.token.deleted) {
    color: #e2777a;
  }

  :global(.token.function-name) {
    color: #6196cc;
  }

  :global(.token.boolean),
  :global(.token.number),
  :global(.token.function) {
    color: #f08d49;
  }

  :global(.token.property),
  :global(.token.class-name),
  :global(.token.constant),
  :global(.token.symbol) {
    color: #f8c555;
  }

  :global(.token.selector),
  :global(.token.important),
  :global(.token.atrule),
  :global(.token.keyword),
  :global(.token.builtin) {
    color: #cc99cd;
  }

  :global(.token.string),
  :global(.token.char),
  :global(.token.attr-value),
  :global(.token.regex),
  :global(.token.variable) {
    color: #7ec699;
  }

  :global(.token.operator),
  :global(.token.entity),
  :global(.token.url) {
    color: #67cdcc;
  }

  :global(.token.important),
  :global(.token.bold) {
    font-weight: bold;
  }
  :global(.token.italic) {
    font-style: italic;
  }

  :global(.token.entity) {
    cursor: help;
  }

  :global(.token.inserted) {
    color: green;
  }
</style>
