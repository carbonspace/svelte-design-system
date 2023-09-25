<script>
  import DesignTokens from '../assets/global_tokens.png'
  import AliasTokens from '../assets/alias_tokens.png'
  import ComponentTokens from '../assets/component_tokens.png'

  let showIntro = false
  let showInitialColor = true
  let showBrandColor = true
  let showFunctionalColor = true
  let showNeutralColor = true
  let showBackgroundColor = true
  let showTextColor = true
  let showBorderColor = true
  let showFont = true
  let showFontWeight = true
  let showFontSize = true
  let showOpacity = true
  let showLineHeight = true
  let showSpacing = true
  let showRadius = true

  // https://www.rgbtohex.net/
  // COLORS
  let initialColors = [
    { id: '0', name: 'gray', hex: '#464646',       rgb: '70, 70, 70'},
    { id: '6', name: 'chartreuse', hex: '#769C00', rgb: '118, 156, 0'},
    { id: '5', name: 'celery', hex: '#07A721',     rgb: '7, 167, 33'},
    { id: '2', name: 'green', hex: '#2FB880',      rgb: '47, 184, 128'},
    { id: '12', name: 'seafoam', hex: '#00A19A',   rgb: '0, 161, 154'},
    { id: '7', name: 'cyan', hex: '#019CC8',       rgb: '1, 156, 200'},
    { id: '1', name: 'blue', hex: '#3892F3',       rgb: '56, 146, 243'},
    { id: '9', name: 'indigo', hex: '#7E84FC',     rgb: '126, 132, 252'},
    { id: '11', name: 'purple', hex: '#AE72F9',    rgb: '174, 114, 249'},
    { id: '8', name: 'fuchsia', hex: '#F455E2',    rgb: '224, 85, 226'},
    { id: '10', name: 'magenta', hex: '#EF5A98',   rgb: '239, 90, 152'},    
    { id: '3', name: 'orange', hex: '#F68511',     rgb: '246, 133, 17'},
    { id: '13', name: 'yellow', hex: '#F8D904',    rgb: '248, 217, 4'},
    { id: '4', name: 'red', hex: '#F75C46',        rgb: '247, 92, 70'},    
  ]

  let brandColors = [
    { id: '0', name: 'orange-100', hex: '#fffaed', rgb: '255, 250, 237'},
    { id: '1', name: 'orange-200', hex: '#ffebc4', rgb: '255, 235, 196'},
    { id: '2', name: 'orange-300', hex: '#ffdb9c', rgb: '255, 219, 156'},
    { id: '3', name: 'orange-400', hex: '#ffc773', rgb: '255, 199, 115'},
    { id: '4', name: 'orange-500', hex: '#ffb14a', rgb: '255, 177, 74'},
    { id: '5', name: 'orange-600', hex: '#f79420', rgb: '247, 148, 32'},
    { id: '6', name: 'orange-700', hex: '#d17111', rgb: '209, 113, 17'},
    { id: '7', name: 'orange-800', hex: '#ab5205', rgb: '171, 82, 5'},
    { id: '8', name: 'orange-900', hex: '#853900', rgb: '133, 57, 0'},
    { id: '9', name: 'orange-1000', hex: '#5e2600', rgb: '94, 38, 0'},
    { id: '10', name: 'blue-100', hex: '#f0f5ff', rgb: '240, 245, 255'},
    { id: '11', name: 'blue-200', hex: '#ebf0fa', rgb: '235, 240, 250'},
    { id: '12', name: 'blue-300', hex: '#c7d2ed', rgb: '199, 210, 237'},
    { id: '13', name: 'blue-400', hex: '#99abe0', rgb: '153, 171, 224'},
    { id: '13', name: 'blue-500', hex: '#6e84d4', rgb: '110, 132, 212'},
    { id: '13', name: 'blue-600', hex: '#485fc7', rgb: '72, 95, 199'},
    { id: '13', name: 'blue-700', hex: '#3242a1', rgb: '50, 66, 161'},
    { id: '13', name: 'blue-800', hex: '#202a7a', rgb: '32, 42, 122'},
    { id: '13', name: 'blue-900', hex: '#121754', rgb: '18, 23, 84'},
    { id: '13', name: 'blue-1000', hex: '#090b2e', rgb: '9, 11, 46'},
  ]

  let brandColorPrimary = [
    { id: '0', name: 'orange-100', hex: '#fffaed', rgb: '255, 250, 237'},
    { id: '1', name: 'orange-200', hex: '#ffebc4', rgb: '255, 235, 196'},
    { id: '2', name: 'orange-300', hex: '#ffdb9c', rgb: '255, 219, 156'},
    { id: '3', name: 'orange-400', hex: '#ffc773', rgb: '255, 199, 115'},
    { id: '4', name: 'orange-500', hex: '#ffb14a', rgb: '255, 177, 74'},
    { id: '5', name: 'orange-600', hex: '#f79420', rgb: '247, 148, 32'},
    { id: '6', name: 'orange-700', hex: '#d17111', rgb: '209, 113, 17'},
    { id: '7', name: 'orange-800', hex: '#ab5205', rgb: '171, 82, 5'},
    { id: '8', name: 'orange-900', hex: '#853900', rgb: '133, 57, 0'},
    { id: '9', name: 'orange-1000', hex: '#5e2600', rgb: '94, 38, 0'}
  ]

  let brandColorSecondary = [
    { id: '10', name: 'blue-100', hex: '#f0f5ff', rgb: '240, 245, 255'},
    { id: '11', name: 'blue-200', hex: '#ebf0fa', rgb: '235, 240, 250'},
    { id: '12', name: 'blue-300', hex: '#c7d2ed', rgb: '199, 210, 237'},
    { id: '13', name: 'blue-400', hex: '#99abe0', rgb: '153, 171, 224'},
    { id: '13', name: 'blue-500', hex: '#6e84d4', rgb: '110, 132, 212'},
    { id: '13', name: 'blue-600', hex: '#485fc7', rgb: '72, 95, 199'},
    { id: '13', name: 'blue-700', hex: '#3242a1', rgb: '50, 66, 161'},
    { id: '13', name: 'blue-800', hex: '#202a7a', rgb: '32, 42, 122'},
    { id: '13', name: 'blue-900', hex: '#121754', rgb: '18, 23, 84'},
    { id: '13', name: 'blue-1000', hex: '#090b2e', rgb: '9, 11, 46'}
  ]

  let functionalColors = [
    { id: '0', name: 'link', hex: '#0d59ff', rgb: '13, 89, 255'},
    { id: '1', name: 'success', hex: '#31d200', rgb: '49, 210, 0'},
    { id: '2', name: 'warning', hex: '#cccccc', rgb: '248, 217, 4'},
    { id: '3', name: 'error', hex: '#ff0329', rgb: '255, 3, 41'},
  ]

  let neutralColors = [
    { id: '0', name: 'gray-1', hex: '#fafafa', rgb: '250, 250, 250'},
    { id: '1', name: 'gray-2', hex: '#f5f5f5', rgb: '245, 245, 245'},
    { id: '2', name: 'gray-3', hex: '#f0f0f0', rgb: '240, 240, 240'},
    { id: '3', name: 'gray-4', hex: '#d9d9d9', rgb: '217, 217, 217'},
    { id: '4', name: 'gray-5', hex: '#bfbfbf', rgb: '191, 191, 191'},
    { id: '5', name: 'gray-6', hex: '#8c8c8c', rgb: '140, 140, 140'},
    { id: '6', name: 'gray-7', hex: '#595959', rgb: '89, 89, 89'},
    { id: '7', name: 'gray-8', hex: '#434343', rgb: '67, 67, 67'},
    { id: '8', name: 'gray-9', hex: '#262626', rgb: '38, 38, 38'},
    { id: '8', name: 'gray-10', hex: '#1f1f1f', rgb: '31, 31, 31'},
  ]

  // https://www.lightningdesignsystem.com/design-tokens/#category-color
  // https://reasonable.work/colors/powder/
  // BACKGROUND_COLORS
  let backgroundColors = [
    { id: '0', name: 'white', hex: '#ffffff', rgb: '255, 255, 255'},
    { id: '1', name: 'neutral', hex: '#f3f3f3', rgb: '243, 243, 243'},
    { id: '2', name: 'midnight', hex: '#004048', rgb: '0, 64, 72'},
  ]

  // TEXT_COLORS
  let textColors = [
    { id: '0', name: 'neutral-80', hex: '#c9c9c9', rgb: '201, 201,  201'},
    { id: '1', name: 'neutral-50', hex: '#747474', rgb: '116, 116, 116'},
    { id: '2', name: 'neutral-30', hex: '#444444', rgb: '68, 68, 68'},
    { id: '3', name: 'neutral-10', hex: '#181818', rgb: '24, 24, 24'},
  ]

  // BORDER_COLORS
  let borderColors = [
    { id: '0', name: 'neutral-90', hex: '#e5e5e5', rgb: '229, 229,  229'},
    { id: '1', name: 'neutral-80', hex: '#c9c9c9', rgb: '201,  201, 201'},
  ]

  // FONTS
  let fonts = [
    { id: '0', name: 'heading', family: '"Montserrat", sans-serif'},
    { id: '1', name: 'body', family: '"Open Sans", sans-serif'},
  ]

  // FONT_WEIGHTS
  let fontWeights = [
    { id: '0', name: 'font-weight-regular', val: '400'},
    { id: '0', name: 'font-weight-bold', val: '700'},
  ]

  // FONT_SIZES
  let fontSizes = [
    { id: '0', name: 'font-size-1', px: '10', rem: '0.625'},
    { id: '0', name: 'font-size-2', px: '12', rem: '0.75'},
    { id: '0', name: 'font-size-3', px: '13', rem: '0.8125'},
    { id: '0', name: 'font-size-4', px: '14', rem: '0.875'},
    { id: '0', name: 'font-size-5', px: '16', rem: '1'},
    { id: '0', name: 'font-size-6', px: '18', rem: '1.125'},
    { id: '0', name: 'font-size-7', px: '20', rem: '1.25'},
    { id: '0', name: 'font-size-8', px: '24', rem: '1.5'},
    { id: '0', name: 'font-size-9', px: '28', rem: '1.75'},
    { id: '0', name: 'font-size-10', px: '32', rem: '2'},
    { id: '0', name: 'font-size-10', px: '42', rem: '2.625'},
  ]

  // OPACITY
  let opacity = [
    { id: '0', name: 'opacity-5', val: '0.5'},
    { id: '0', name: 'opacity-8', val: '0.8'},
  ]

  // LINE_HEIGHT
  let lineHeights = [
    { id: '0', name: 'line-height-heading', val: '1.8'},
    { id: '0', name: 'line-height-text', val: '1.5'},
    { id: '0', name: 'line-height-section', val: '1.25'},
  ]

  // SPACING
  let spacings = [
    { id: '0', name: 'spacing-xs', val: '0.5rem'},
    { id: '0', name: 'spacing-sm', val: '1rem'},
    { id: '0', name: 'spacing-md', val: '1.5rem'},
    { id: '0', name: 'spacing-lg', val: '2rem'},
    { id: '0', name: 'spacing-xl', val: '2.5rem'},
  ]

  // RADIUS
  let radius = [
    { id: '0', name: 'radius-50', val: '50%'},
    { id: '0', name: 'radius-xs', val: '0.25rem'},
    { id: '0', name: 'radius-sm', val: '0.5rem'},
    { id: '0', name: 'radius-md', val: '0.75rem'},
    { id: '0', name: 'radius-lg', val: '1rem'},
  ]
</script>

<section class="section is-title-bar">
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <ul>
          <li>DS</li>
          <li>Design Tokens</li>
        </ul>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item" />
    </div>
  </div>
</section>

<section class="hero is-hero-bar">
  <div class="hero-body">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 class="title">Design Tokens</h1>
        </div>
      </div>
      <div class="level-right" style="display: none;">
        <div class="level-item" />
      </div>
    </div>
  </div>
</section>

<section class="section is-component-section" id="intro">
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">What are design tokens?</p>
      <button
        class="card-header-icon"
        aria-label="more options"
        on:click={() => (showIntro = !showIntro)}
      >
        <span class="icon">
          <span class="material-icons-sharp is-size-4">expand_more</span>
        </span>
      </button>
    </header>
    {#if showIntro}
      <div class="card-content">
        <div class="content is-flex is-justify-content-space-evenly">
          <div>
            <h6>Global Tokens</h6>
            <p>Global tokens are the primitive values in our design language,
              represented by context-agnostic names. Our color palette, animation,
              typography, and dimension values are all recorded as global tokens.
              These can be directly used, and are inherited by all other token
              types.</p>
          </div>
          <img src={DesignTokens} alt="Global Tokens" />
        </div>
        <div class="content is-flex is-justify-content-space-evenly">
          <div>
            <h6>Alias Tokens</h6>
            <p>Alias tokens relate to a specific context or abstraction. Aliases help communicate 
              the intended purpose of a token, and are effective when a value with a single intent 
              will appear in multiple places.</p>
          </div>
          <img src={AliasTokens} alt="Alias Tokens" />
        </div>
        <div class="content is-flex is-justify-content-space-evenly">
          <div>
            <h6>Component Tokens</h6>
            <p>Component-specific tokens are an exhaustive representation of every value associated 
              with a component. They often inherit from alias tokens, but are named in a way that 
              allows engineering teams to be as specific as possible in applying tokens in component 
              development.</p>
          </div>
          <img src={ComponentTokens} alt="Component Tokens" />
        </div>
      </div>
    {/if}
  </div>
</section>

<section class="section is-component-section" id="colors">
  <!-- Initial Color -->
  <div id="initial-color" class="pattern-anchor"></div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Initial Color</p>
      <button
        class="card-header-icon"
        aria-label="more options"
        on:click={() => (showInitialColor = !showInitialColor)}
      >
        <span class="icon">
          <span class="material-icons-sharp is-size-4">expand_more</span>
        </span>
      </button>
    </header>
    {#if showInitialColor}
    <div class="card-content">
      <div class="content">
        <div class="content-desc">Initial color provides a base of various color values for 
          creating variations of the common theme.</div>
<!--         {#each initialColors as { id, name, hex, rgb}, i }
        <span class="token-wrap">
          <div class="color-item" style="background: rgb({rgb})"></div>
          <div class="color-name">{name}</div>
          <div class="color-hex">{hex}</div>
          <div class="color-rgb">rgb({rgb})</div>
        </span>
        {/each} -->
        <div>
          {#each initialColors as { id, name, hex, rgb}, i }
          <div style="background: rgb({rgb});{i == 12 ? 'color: #4a4a4a;' : '' }" class="swatch is-flex is-justify-content-space-evenly">
            <div>{name}</div>
            <div>{hex}</div>
            <div>rgb({rgb})</div>
          </div>
          {/each}             
        </div>
      </div>
    </div>
    {/if}
  </div>

  <!-- Brand Color -->
  <div id="brand-color" class="pattern-anchor"></div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Brand Color</p>
      <button
        class="card-header-icon"
        aria-label="more options"
        on:click={() => (showBrandColor = !showBrandColor)}
      >
        <span class="icon">
          <span class="material-icons-sharp is-size-4">expand_more</span>
        </span>
      </button>
    </header>
    {#if showBrandColor}
    <div class="card-content">
      <div class="content">
        <div class="content-desc">The brand color is one of the most intuitive visual elements 
          used that is used to embody product characteristics and communicate ideas. When 
          selecting colors, it is important to understand how the brand color is used in the 
          user interface.
        </div>
        <div class="is-flex is-justify-content-space-evenly">
          <div>
            <span class="bold">Primary:</span>
            <span class="swatch-primary">Orange-600</span>
          </div>
          <div>
            <span class="bold">Secondary:</span>
            <span class="swatch-secondary">Blue-600</span>
          </div>
        </div>
<!--         {#each brandColors as { id, name, hex, rgb}, i }
        <span class="token-wrap{i == 5 || i == 15 ? ' border' : ''}">
          <div class="color-item" style="background: rgb({rgb})"></div>
          <div class="color-name">{name}</div>
          <div class="color-hex">{hex}</div>
          <div class="color-rgb">rgb({rgb})</div>
        </span>
        {/each} -->
      </div>
      <div class="is-flex is-justify-content-space-evenly">
        <div style="width:50%">
          {#each brandColorPrimary as { id, name, hex, rgb}, i }
          <div style="background: rgb({rgb});{i < 4 || i > 9 && i < 13 ? 'color: #4a4a4a;' : '' }{i == 5 ? 'font-weight: bold; font-size: 1.1rem;' : ''}" class="swatch is-flex is-justify-content-space-evenly">
            <div>{name}</div>
            <div>{hex}</div>
            <div>rgb({rgb})</div>
          </div>
          {/each}
        </div>
        <div style="width: 50%">
          {#each brandColorSecondary as { id, name, hex, rgb}, i }
          <div style="background: rgb({rgb});{i < 4 || i > 9 && i < 13 ? 'color: #4a4a4a;' : '' }{i == 5 ? 'font-weight: bold; font-size: 1.1rem;' : ''}" class="swatch is-flex is-justify-content-space-evenly">
            <div>{name}</div>
            <div>{hex}</div>
            <div>rgb({rgb})</div>
          </div>
          {/each}           
        </div>               
      </div>
      
    </div>
    {/if}
  </div>

  <!-- Functional Color -->
  <div id="functional-color" class="pattern-anchor"></div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Functional Color</p>
      <button 
        class="card-header-icon" 
        aria-label="more options" 
        on:click={() => (showFunctionalColor = !showFunctionalColor)}
      >
        <span class="icon">
          <span class="material-icons-sharp is-size-4">expand_more</span>
        </span>
      </button>
    </header>
    {#if showFunctionalColor}
    <div class="card-content">
      <div class="content">
        <div class="content-desc">Functional color represents a clear message as well as 
          status, such as success, error, failure, reminder, link and so on. Functional 
          color selection need to comply with the user's basic understanding of color. 
          We suggest that the functional colors should be kept as consistent as possible 
          under a set of product systems. Do not have too much customization to interfere 
          with the user's cognitive experience.</div>
<!--         {#each functionalColors as { id, name, hex, rgb}, i }
        <span class="token-wrap">
          <div class="color-item" style="background: rgb({rgb})"></div>
          <div class="color-name">{name}</div>
          <div class="color-hex">{hex}</div>
          <div class="color-rgb">rgb({rgb})</div>
        </span>
        {/each} -->
        <div>
          {#each functionalColors as { id, name, hex, rgb}, i }
          <div style="background: rgb({rgb});{i == 1 || i == 2 ? 'color: #4a4a4a;' : '' }" class="swatch is-flex is-justify-content-space-evenly">
            <div>{name}</div>
            <div>{hex}</div>
            <div>rgb({rgb})</div>
          </div>
          {/each}             
        </div>        
      </div>
    </div>
    {/if}
  </div>

  <!-- Neutral Color -->
  <div id="neutral-color" class="pattern-anchor"></div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Neutral Color</p>
      <button 
        class="card-header-icon" 
        aria-label="more options" 
        on:click={() => (showNeutralColor = !showNeutralColor)}
      >
        <span class="icon">
          <span class="material-icons-sharp is-size-4">expand_more</span>
        </span>
      </button>
    </header>
    {#if showNeutralColor}
    <div class="card-content">
      <div class="content">
        <div class="content-desc">Neutral color is mainly used in a large part of the text 
          interface, in addition to the background, borders, dividing lines, and other 
          scenes are also very common. Neutral color definition needs to consider the 
          difference between dark background and light background, while incorporating 
          the WCAG 2.0 standard.</div>
<!--         {#each neutralColors as { id, name, hex, rgb}, i }
        <span class="token-wrap">
          <div class="color-item {i < 3 ? 'border' : ''}" style="background: rgb({rgb});"></div>
          <div class="color-name">{name}</div>
          <div class="color-hex">{hex}</div>
          <div class="color-rgb">rgb({rgb})</div>
        </span>
        {/each} -->
        <div>
          {#each neutralColors as { id, name, hex, rgb}, i }
          <div style="background: rgb({rgb});{i < 5 ? 'color: #4a4a4a;' : '' }" class="swatch is-flex is-justify-content-space-evenly">
            <div>{name}</div>
            <div>{hex}</div>
            <div>rgb({rgb})</div>
          </div>
          {/each}             
        </div>         
      </div>
    </div>
    {/if}
  </div>

  <!-- Background Color -->
  <div id="background-color" class="pattern-anchor"></div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Background Color</p>
      <button 
        class="card-header-icon" 
        aria-label="more options" 
        on:click={() => (showBackgroundColor = !showBackgroundColor)}
      >
        <span class="icon">
          <span class="material-icons-sharp is-size-4">expand_more</span>
        </span>
      </button>
    </header>
    {#if showBackgroundColor}
    <div class="card-content">
      <div class="content">
        <div class="content-desc">Use these tokens for background colors only. Do not use 
          these for border colors or text colors.</div>
<!--         {#each backgroundColors as { id, name, hex, rgb}, i }
        <span class="token-wrap">
          <div class="color-item border" style="background: rgb({rgb});"></div>
          <div class="color-name">{name}</div>
          <div class="color-hex">{hex}</div>
          <div class="color-rgb">rgb({rgb})</div>
        </span>
        {/each} -->
        <div>
          {#each backgroundColors as { id, name, hex, rgb}, i }
          <div style="background: rgb({rgb});{i < 2  ? 'color: #4a4a4a;' : '' }" class="swatch is-flex is-justify-content-space-evenly">
            <div>{name}</div>
            <div>{hex}</div>
            <div>rgb({rgb})</div>
          </div>
          {/each}             
        </div>         
      </div>
    </div>
    {/if}
  </div>

  <!-- Text Color -->
  <div id="text-color" class="pattern-anchor"></div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Text Color</p>
      <button 
        class="card-header-icon" 
        aria-label="more options" 
        on:click={() => (showTextColor = !showTextColor)}
      >
        <span class="icon">
          <span class="material-icons-sharp is-size-4">expand_more</span>
        </span>
      </button>
    </header>
    {#if showTextColor}
    <div class="card-content">
      <div class="content">
        <div class="content-desc">Use these tokens for text colors only. Do not use 
          these for border colors or background colors.</div>
<!--         {#each textColors as { id, name, hex, rgb}, i }
        <span class="token-wrap">
          <div class="color-item" style="background: rgb({rgb});"></div>
          <div class="color-name">{name}</div>
          <div class="color-hex">{hex}</div>
          <div class="color-rgb">rgb({rgb})</div>
        </span>
        {/each} -->
        <div>
          {#each textColors as { id, name, hex, rgb}, i }
          <div style="background: rgb({rgb});{i == 0  ? 'color: #4a4a4a;' : '' }" class="swatch is-flex is-justify-content-space-evenly">
            <div>{name}</div>
            <div>{hex}</div>
            <div>rgb({rgb})</div>
          </div>
          {/each}             
        </div>         
      </div>
    </div>
    {/if}
  </div>

  <!-- Border Color -->
  <div id="border-color" class="pattern-anchor"></div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Border Color</p>
      <button 
        class="card-header-icon" 
        aria-label="more options" 
        on:click={() => (showBorderColor = !showBorderColor)}
      >
        <span class="icon">
          <span class="material-icons-sharp is-size-4">expand_more</span>
        </span>
      </button>
    </header>
    {#if showBorderColor}
    <div class="card-content">
      <div class="content">
        <div class="content-desc">Use these tokens for border colors only. Do not use 
          these for background colors or text colors.</div>
<!--         {#each borderColors as { id, name, hex, rgb}, i }
        <span class="token-wrap">
          <div class="color-item" style="background: rgb({rgb});"></div>
          <div class="color-name">{name}</div>
          <div class="color-hex">{hex}</div>
          <div class="color-rgb">rgb({rgb})</div>
        </span>
        {/each} -->
        <div>
          {#each borderColors as { id, name, hex, rgb}, i }
          <div style="background: rgb({rgb});{i < 2  ? 'color: #4a4a4a;' : '' }" class="swatch is-flex is-justify-content-space-evenly">
            <div>{name}</div>
            <div>{hex}</div>
            <div>rgb({rgb})</div>
          </div>
          {/each}             
        </div>        
      </div>
    </div>
    {/if}
  </div>

  <!-- Fonts -->
  <div id="fonts" class="pattern-anchor"></div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Fonts</p>
      <button 
        class="card-header-icon" 
        aria-label="more options" 
        on:click={() => (showFont= !showFont)}
      >
        <span class="icon">
          <span class="material-icons-sharp is-size-4">expand_more</span>
        </span>
      </button>
    </header>
    {#if showFont}
    <div class="card-content">
      <div class="content is-flex is-justify-content-space-evenly">
        {#each fonts as { id, name, family}, i }
        <span class="token-wrap">
          <div class="font" style="font-family: {family};">{family}</div>
          <div class="font-name">{name}</div>
          <div class="font-size">{family}</div>
        </span>
        {/each}
      </div>
    </div>
    {/if}
  </div>

  <!-- Font Weight -->
  <div id="font-weights" class="pattern-anchor"></div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Font Weights</p>
      <button 
        class="card-header-icon" 
        aria-label="more options" 
        on:click={() => (showFontWeight = !showFontWeight)}
      >
        <span class="icon">
          <span class="material-icons-sharp is-size-4">expand_more</span>
        </span>
      </button>
    </header>
    {#if showFontWeight}
    <div class="card-content">
      <div class="content is-flex is-justify-content-space-evenly">
        {#each fontWeights as { id, name, val }, i }
        <span class="token-wrap">
          <div style="font-weight: {val};">AaBbCc</div>
          <div class="font-name">{name}</div>
          <div class="font-px">{val}</div>
        </span>
        {/each}
      </div>
    </div>
    {/if}
  </div>  

  <!-- Font Sizes -->
  <div id="font-sizes" class="pattern-anchor"></div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Font Sizes</p>
      <button 
        class="card-header-icon" 
        aria-label="more options" 
        on:click={() => (showFontSize= !showFontSize)}
      >
        <span class="icon">
          <span class="material-icons-sharp is-size-4">expand_more</span>
        </span>
      </button>
    </header>
    {#if showFontSize}
    <div class="card-content">
      <div class="content">
        {#each fontSizes as { id, name, px, rem }, i }
        <span class="token-wrap">
          <div style="font-size: {px}px;">AaBbCc</div>
          <div class="font-name">{name}</div>
          <div class="font-px">{px}px</div>
          <div class="font-rem">{rem}rem</div>
        </span>
        {/each}
      </div>
    </div>
    {/if}
  </div>

  <!-- Opacity -->
  <div id="opacity" class="pattern-anchor"></div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Opacity</p>
      <button 
        class="card-header-icon" 
        aria-label="more options" 
        on:click={() => (showOpacity= !showOpacity)}
      >
        <span class="icon">
          <span class="material-icons-sharp is-size-4">expand_more</span>
        </span>
      </button>
    </header>
    {#if showOpacity}
    <div class="card-content">
      <div class="content">
        <div class="content-desc"></div>
        {#each opacity as { id, name, val }, i }
        <span class="token-wrap">
          <div class="token-opacity" style="opacity: {val};">AaBbCc</div>
          <div class="opacity-name">{name}</div>
          <div class="opacity-val">{val}rem</div>
        </span>
        {/each}
      </div>
    </div>
    {/if}
  </div>

  <!-- Line Height -->
  <div id="line-height" class="pattern-anchor"></div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Line Height</p>
      <button 
        class="card-header-icon" 
        aria-label="more options" 
        on:click={() => (showLineHeight= !showLineHeight)}
      >
        <span class="icon">
          <span class="material-icons-sharp is-size-4">expand_more</span>
        </span>
      </button>
    </header>
    {#if showLineHeight}
    <div class="card-content">
      <div class="content">
        <div class="content-desc"></div>
        {#each lineHeights as { id, name, val }, i }
        <span class="token-wrap">
          <div class="token-line-height" style="line-height: {val};">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div class="token-name">{name}</div>
        </span>
        {/each}
      </div>
    </div>
    {/if}
  </div>

  <!-- Spacing -->
  <div id="spacing" class="pattern-anchor"></div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Spacing</p>
      <button 
        class="card-header-icon" 
        aria-label="more options" 
        on:click={() => (showSpacing = !showSpacing)}
      >
        <span class="icon">
          <span class="material-icons-sharp is-size-4">expand_more</span>
        </span>
      </button>
    </header>
    {#if showSpacing}
    <div class="card-content">
      <div class="content">
        <div class="content-desc"></div>
        {#each spacings as { id, name, val }, i }
        <span class="token-wrap" style="border: 1px solid #d9d9d9;">
          <div class="token-padding" style="padding: 0 {val}; background: #666;">
            <div style="background: #fff;">Padding</div>
          </div>
          <div class="token-name">{name}</div>
          <div class="token-val">{val}</div>
        </span>
        {/each}
        {#each spacings as { id, name, val }, i }
        <span class="token-wrap" style="border: 1px solid #d9d9d9;">
          <div class="token-margin" style="margin: 0 {val};  background: #fff;">
            <div style="background: #666;color: #fff;">Margin</div>
          </div>
          <div class="token-name">{name}</div>
          <div class="token-val">{val}</div>
        </span>
        {/each}        
      </div>
    </div>
    {/if}
  </div>

  <!-- Radius -->
  <div id="radius" class="pattern-anchor"></div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Radius</p>
      <button 
        class="card-header-icon" 
        aria-label="more options" 
        on:click={() => (showRadius = !showRadius)}
      >
        <span class="icon">
          <span class="material-icons-sharp is-size-4">expand_more</span>
        </span>
      </button>
    </header>
    {#if showRadius}
    <div class="card-content">
      <div class="content">
        <div class="content-desc"></div>
        {#each radius as { id, name, val }, i }
        <span class="token-wrap">
          <div class="token-radius" style="border-radius: {val};"></div>
          <div class="token-name">{name}</div>
          <div class="token-val">{val}</div>
        </span>
        {/each}
      </div>
    </div>
    {/if}
  </div>       
</section>

<style>
  .token-wrap {
    display: inline-block;
    text-align: center;
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 0.25rem;
  }
  .token-opacity {
    font-size: 1.5rem;
    width: 6rem;
    height: 2rem;
    background: #000;
    color: #fff;
  }
  .token-line-height {
    width: 21rem;
    text-align: left;
  }
  .token-radius {
    width: 5rem;
    height: 5rem;
    background: #666;
  }
  .token-name,
  .color-name,
  .font-name,
  .opacity-name {
    font-weight: bold;
  }
  .font {
    font-size: 1.5rem;
  }
  .token-name,
  .token-val,
  .color-name,
  .color-hex,
  .color-rgb,
  .font-name,
  .font-size,
  .font-px,
  .font-rem,
  .opacity-name,
  .opacity-val {
    font-size: 0.8rem;
  }
  .color-name,
  .color-hex,
  .color-rgb {
    text-transform: capitalize;
  }  
  .color-hex {
    text-transform: uppercase;
  }
  .color-rgb {
    text-transform: none;
  }
  .color-item {
    display: inline-block;
    width: 7rem;
    height: 4rem;
    border-radius: 2rem;
  }
  .content-desc {
    margin-bottom: 1.5rem;
  }
  .swatch {
    padding:1rem; 
    color: #fff;
  }
  .swatch-primary {
    background: #f79420; 
    color: #fff; 
    padding: 4px; 
    border-radius: 4px;
  }
  .swatch-secondary {
    background: #485FC7; 
    color: #fff; 
    padding: 4px; 
    border-radius: 4px;
  }
</style>
