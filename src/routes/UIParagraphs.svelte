<script>
  import CardFooter from '../lib/CardFooter.svelte'
  let showParagraphs = true

  // Headings
  const codeHTML = `<p>But on this most auspicious of nights, permit me then, in lieu of the more commonplace 
soubriquet, to suggest the character of this dramatis persona. Voila! In view humble 
vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes 
of fate. This visage, no mere veneer of vanity, is a vestige of the “vox populi” now 
vacant, vanished. However, this valorous visitation of a bygone vexation stands 
vivified, and has vowed to vanquish these venal and virulent vermin, van guarding 
vice and vouchsafing the violently vicious and voracious violation of volition.</p>

<p>The only verdict is vengeance; a vendetta, held as a votive not in vain, for the 
value and veracity of such shall one day vindicate the vigilant and the virtuous.</p>

<p>Verily this vichyssoise of verbiage veers most verbose, so let me simply add that 
it's my very good honour to meet you and you may call me V.</p>`
</script>

<!-- Paragraphs -->
<div class="card">
  <header class="card-header">
    <p class="card-header-title">Paragraphs</p>
    <button
      class="card-header-icon"
      aria-label="more options"
      on:click={() => (showParagraphs= !showParagraphs)}
    >
      <span class="icon">
        <span class="material-icons-sharp is-size-4">
          {#if showParagraphs}
            expand_more
          {:else}
            expand_less
          {/if}
        </span>
      </span>
    </button>
  </header>
  {#if showParagraphs}
    <div class="card-content">
      <div class="content">
        <p>But on this most auspicious of nights, permit me then, in lieu of the more commonplace 
          soubriquet, to suggest the character of this dramatis persona. Voila! In view humble 
          vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes 
          of fate. This visage, no mere veneer of vanity, is a vestige of the “vox populi” now 
          vacant, vanished. However, this valorous visitation of a bygone vexation stands 
          vivified, and has vowed to vanquish these venal and virulent vermin, van guarding 
          vice and vouchsafing the violently vicious and voracious violation of volition.</p>

          <p>The only verdict is vengeance; a vendetta, held as a votive not in vain, for the 
            value and veracity of such shall one day vindicate the vigilant and the virtuous.</p>

          <p>Verily this vichyssoise of verbiage veers most verbose, so let me simply add that 
            it's my very good honour to meet you and you may call me V.</p>
      </div>
    </div>
  <CardFooter
    codeHTML={codeHTML}
    codeCSS=""
    codeJS=""
  />
  {/if}
</div>