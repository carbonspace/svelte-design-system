<script lang="ts">
  // @ts-nocheck
  import { onMount } from 'svelte'
  import Router, {link} from 'svelte-spa-router'
  import active from 'svelte-spa-router/active'
  import routes from './routes'
  import Typeahead from "svelte-typeahead"
  import SvelteTooltip from 'svelte-tooltip'
  import data from "./components"
  import "../css/style.css"

  let typeaheadEvents = []
  //const extract = (item) => item.pattern
  let e = []

  let showSubItemDropdown = false
  let showDropdownUI = false

  function toggleSubItemDropdown() {
    showSubItemDropdown = !showSubItemDropdown
  }

  function toggleDropdownUI() {
    showDropdownUI = !showDropdownUI
  }

  onMount(() => window.scrollTo(0,0))
</script>


<div id="app">
  <nav id="navbar-main" class="navbar is-fixed-top">
    <div class="navbar-brand">
      <a href="#!" class="navbar-item is-hidden-desktop jb-aside-mobile-toggle">
        <span class="icon">
          <!-- <i class="mdi mdi-forwardburger mdi-24px"></i> -->
          <span class="material-icons-sharp is-size-5">menu_open</span>
        </span>
      </a>
      <div class="navbar-item has-control">
        <div class="control is-flex">
          <!-- <input placeholder="Search everywhere..." class="input"> -->
          <!-- <Typeahead
            hideLabel
            label="Search Patterns"
            placeholder={`Search Patterns`}
            {data}
            extract={(item) => item.pattern}
            on:select={({ detail }) => typeaheadEvents = [typeaheadEvents.original.url, detail]}
            on:clear={() => typeaheadEvents = [...typeaheadEvents, "clear"]}                      
          /> -->
          <Typeahead
            focusAfterSelect
            hideLabel
            label="Search Patterns"
            placeholder={`Search Patterns`}            
            {data}
            extract={(item) => item.pattern}
            on:select={(e) => {
              // console.log("select", e.detail.original.url)
              // console.log(e);
              window.location = "http://" + window.location.host + e.detail.original.url
              // document.querySelector('#typeahead-0.mi7fcvgqpto').value=''
            }}
            on:clear={() => typeaheadEvents = [...typeaheadEvents, "clear"]} 
          />
            <div class="tt-wrap">
              <SvelteTooltip tip="ESC to clear; Arrow Up/Down to Choose; ENTER to select" right>
                <span class="material-icons-sharp is-size-5" style="margin-left: 5px; margin-top:10px;cursor: pointer; color: #666;">help_outline</span>
              </SvelteTooltip>              
            </div>
        </div>
      </div>
    </div>
    <div class="navbar-brand is-right">
      <a href="#!" class="navbar-item is-hidden-desktop jb-navbar-menu-toggle" data-target="navbar-menu">
        <span class="icon">
          <i class="mdi mdi-dots-vertical"></i>
          <span class="material-icons-sharp is-size-5">more_vert</span>
        </span>
      </a>
    </div>
  </nav>
  
  <aside class="aside is-placed-left is-expanded">
    <div class="aside-tools">
      <div class="aside-tools-label">
        <span><b>DesignSystem</b> </span>
      </div>
    </div>
    <div class="menu is-menu-main">
      <p class="menu-label">General</p>
      <ul class="menu-list flat">
        <li>
          <a href="#/" class="is-active router-link-active has-icon">            
            <span class="icon">
              <span class="material-icons-sharp is-size-6">language</span>
            </span>
            <span class="menu-item-label">Tokens</span>
            <!-- <pre>{JSON.stringify(typeaheadEvents, null, 2)}</pre> -->
          </a>
        </li>
      </ul>
      <p class="menu-label">Patterns</p>
      <ul class="menu-list flat">
        <!-- UI Elements -->
        <li>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <a href="/components/ui" class="has-icon has-dropdown-icon" use:link use:active on:click={toggleDropdownUI}>
            <span class="icon has-update-mark">
              <span class="material-icons-sharp is-size-6">view_list</span>
            </span>
            <span class="menu-item-label">UI Elements</span>
            <div class="dropdown-icon">
              <span class="icon">
                <span class="material-icons-sharp is-size-6">
                  {#if showDropdownUI}
                    remove
                  {:else}
                    add
                  {/if}
                </span>
              </span>
            </div>
          </a>
          {#if showDropdownUI}
          <ul class="flat">
            <li>
              <a href="/components/ui" use:link use:active>
                <span>All</span>
              </a>
            </li>
            <li>
<!-- Note the {{...}} notation because we're passing an object as parameter for a Svelte action -->
<!-- use:link allows us to eliminate the hash in the url, e.g. http:something.com/#/components/ui/headings-->
              <a href="/components/ui/headings" use:link={{href: '/components/ui/headings', disabled: false}} use:active>
                <span>Headings</span>
              </a>
            </li>
            <li>
              <a href="/components/ui/paragraphs" use:link use:active>
                <span>Paragraphs</span>
              </a>
            </li>
            <li>
              <a href="/components/ui/lists" use:link use:active>
                <span>Lists</span>
              </a>
            </li>
            <li>
              <a href="/components/ui/inline" use:link use:active>
                <span>Inline Elements</span>
              </a>
            </li>
          </ul>
          {/if}
        </li>

        <li>
          <a href="#/components/forms" class="has-icon has-dropdown-icon" use:link use:active on:click>
            <span class="icon">
              <span class="material-icons-sharp is-size-6">dynamic_form</span>
            </span>
            <span class="menu-item-label">Forms</span>
          </a>
        </li>
        
        <li>
          <a href="#/components/tables" class="has-icon">
            <span class="icon has-update-mark">
              <span class="material-icons-sharp is-size-6">table_view</span>
            </span>
            <span class="menu-item-label">Tables</span>
          </a>
        </li>

        <li>
          <a href="#/components/widgets" class="has-icon">
            <span class="icon">
              <span class="material-icons-sharp is-size-6">person_pin</span>
            </span>
            <span class="menu-item-label">Widgets</span>
          </a>
        </li>

        <li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <a class="has-icon has-dropdown-icon" on:click={toggleSubItemDropdown}>
            <span class="icon">
              <span class="material-icons-sharp is-size-6">view_list</span>
            </span>
            <span class="menu-item-label">Submenus</span>
            <div class="dropdown-icon">
              <span class="icon">
                <span class="material-icons-sharp is-size-6">
                  {#if showSubItemDropdown}
                    remove
                  {:else}
                    add
                  {/if}
                </span>
              </span>
            </div>
          </a>
          {#if showSubItemDropdown}
          <ul>
            <li>
              <a href="#void">
                <span>Sub-item One</span>
              </a>
            </li>
            <li>
              <a href="#void">
                <span>Sub-item Two</span>
              </a>
            </li>
          </ul>
          {/if}
        </li>
      </ul>
      <p class="menu-label">About</p>
      <ul class="menu-list">
        <li>
          <!-- svelte-ignore security-anchor-rel-noreferrer -->
          <a href="https://github.com/" target="_blank" class="has-icon">
            <span class="icon"><i class="mdi mdi-github-circle"></i></span>
            <span class="menu-item-label">GitHub</span>
          </a>
        </li>
        <li>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="#" class="has-icon">
            <span class="icon"><i class="mdi mdi-help-circle"></i></span>
            <span class="menu-item-label">About</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>

  <!-- Show the router -->
  <Router {routes} />

  <footer class="footer">
    <div class="container-fluid">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            © 2023, GetCoins.com
          </div>
          <div class="level-item">
            <a href="https://github.com/">
              v1.0.0
              <!-- <img src="https://img.shields.io/github/v/release/vikdiesel/admin-one-bulma-dashboard?color=%23999" alt=""> -->
            </a>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="logo">
              <a href="https://getcoins.com"><img src="img/logo.svg" alt="GetCoins.com"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

<style>
  /* Style for "active" links; need to mark this :global because the router adds the class directly */
  :global(a.active) {
      color: white;
      margin-left: 1rem;
      margin-left: 0;
  }  
  .tt-wrap {
    color: #fff;
  }

  /* remove if not used 
  :global(a.active::after) {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    position: relative;
    top: 1px;
    left: 5px;
    left: 0;
    color: white;
  }
  */
</style>