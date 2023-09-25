<script>
  import CardFooter from '../lib/CardFooter.svelte'

  let showInlineElements = true
  // Lists
  const codeHTML = `<a href="#!">This is a text link</a>

<strong>Strong is used to indicate strong importance.</strong>

<em>This text has added emphasis.</em>

The <b>b element</b> is stylistically different text from normal text, without any special importance.

The <i>i element</i> is text that is offset from the normal text.

The <u>u element</u> is text with an unarticulated, though explicitly rendered, non-textual annotation.

<del>This text is deleted</del> and
<ins>This text is inserted</ins>.

<s>This text has a strikethrough</s>
Superscript<sup>®</sup>
Subscript for things like H<sub>2</sub>O

<small>This text is small for for fine print, etc.</small>

Abbreviation:
<abbr title="HyperText Markup Language">HTML</abbr>

<q
  cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q"
  >This text is a short inline quotation.</q
>

<cite>This is a citation.</cite>
The <dfn>dfn element</dfn> indicates a definition.
The <mark>mark element</mark> indicates a highlight.

The <var>variable element</var>, such as <var>x</var> = <var>y</var>.

The time element:
<time datetime="2013-04-06T12:32+00:00">2 weeks ago</time>`
</script>

<!-- Lists -->
<div class="card">
  <header class="card-header">
    <p class="card-header-title">Inline Elements</p>
    <button
      class="card-header-icon"
      aria-label="more options"
      on:click={() => (showInlineElements = !showInlineElements)}
    >
      <span class="icon">
        <span class="material-icons-sharp is-size-4">
          {#if showInlineElements}
            expand_more
          {:else}
            expand_less
          {/if}
        </span>
      </span>
    </button>
  </header>
  {#if showInlineElements}
    <div class="card-content">
      <div class="content">
        <p><a href="#!">This is a text link</a>.</p>
        <p>
          <strong>Strong is used to indicate strong importance.</strong>
        </p>
        <p><em>This text has added emphasis.</em></p>
        <p>
          The <b>b element</b> is stylistically different text from normal
          text, without any special importance.
        </p>
        <p>
          The <i>i element</i> is text that is offset from the normal
          text.
        </p>
        <p>
          The <u>u element</u> is text with an unarticulated, though
          explicitly rendered, non-textual annotation.
        </p>
        <p>
          <del>This text is deleted</del> and
          <ins>This text is inserted</ins>.
        </p>
        <p><s>This text has a strikethrough</s>.</p>
        <p>Superscript<sup>®</sup>.</p>
        <p>Subscript for things like H<sub>2</sub>O.</p>
        <p>
          <small>This text is small for for fine print, etc.</small>
        </p>
        <p>
          Abbreviation:
          <abbr title="HyperText Markup Language">HTML</abbr>
        </p>
        <p>
          <q
            cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q"
            >This text is a short inline quotation.</q
          >
        </p>
        <p><cite>This is a citation.</cite></p>
        <p>The <dfn>dfn element</dfn> indicates a definition.</p>
        <p>The <mark>mark element</mark> indicates a highlight.</p>
        <p>
          The <var>variable element</var>, such as <var>x</var> =
          <var>y</var>.
        </p>
        <p>
          The time element:
          <time datetime="2013-04-06T12:32+00:00">2 weeks ago</time>
        </p>
      </div>
    </div>
  
  <CardFooter
    codeHTML={codeHTML}
    codeCSS=""
    codeJS=""
  />
  {/if}
</div><!-- /card -->