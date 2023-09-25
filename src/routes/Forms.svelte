<script>
  import { library } from "../../node_modules/@fortawesome/fontawesome-svg-core";
  import {
    faUser,
    faCheck,
    faEnvelope,
    faExclamationTriangle,
    faMagnifyingGlass,
    faMeteor,
    faPenNib,
    faGhost,
    faCircleUser,
    faDroplet,
    faPooStorm,
    faRocket,
    faDragon,
    faJoint,
    faVirusCovid,
    faUserAstronaut,
    faStroopwafel
  } from "../../node_modules/@fortawesome/free-solid-svg-icons";
  import {
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText,
  } from "fontawesome-svelte";

  // Range Slider
  let sliderAVal = 20
  let sliderAMin = 0
  let sliderAMax = 100
  let sliderBVal = 50
  let sliderBMin = 0
  let sliderBMax = 100  
</script>

<section class="section is-title-bar">
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <ul>
          <li>DS</li>
          <li>Forms</li>
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
          <h1 class="title">Forms</h1>
        </div>
      </div>
      <div class="level-right" style="display: none;">
        <div class="level-item" />
      </div>
    </div>
  </div>
</section>

<section class="section is-component-section">
  <a href="#input-elements">Input</a>
  <h2>Sample Form</h2>
  <!-- Name -->
  <div class="field is-first">
    <label class="label" for="name">Name</label>
    <div class="control">
      <input class="input" type="text" placeholder="Text input" id="name" />
    </div>
  </div>
  <!-- Username -->
  <div class="field">
    <label class="label" for="username">Username</label>
    <div class="control has-icons-left has-icons-right">
      <input
        class="input is-success"
        type="text"
        placeholder="Text input"
        value="bulma"
        id="username"
      />
      <span class="icon is-small is-left">
        <!-- <i class="fas fa-user"></i> -->
        <FontAwesomeIcon icon={faUser} />
      </span>
      <span class="icon is-small is-right">
        <!-- <i class="fas fa-check"></i> -->
        <FontAwesomeIcon icon={faCheck} />
      </span>
    </div>
    <p class="help is-success">This username is available</p>
  </div>
  <!-- Email -->
  <div class="field">
    <label class="label" for="email">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input
        class="input is-danger"
        type="email"
        placeholder="Email input"
        value="hello@"
        id="email"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-envelope" />
        <FontAwesomeIcon icon={faEnvelope} />
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle" />
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </span>
    </div>
    <p class="help is-danger">This email is invalid</p>
  </div>
  <!-- Subject -->
  <div class="field">
    <label class="label" for="subject-select">Subject</label>
    <div class="control">
      <div class="select">
        <select id="subject-select">
          <option>Select dropdown</option>
          <option>With options</option>
          <option>With one option that makes the dropdown really wide</option>
        </select>
      </div>
    </div>
  </div>
  <!-- Message -->
  <div class="field">
    <label class="label" for="message-textarea">Message</label>
    <div class="control">
      <textarea class="textarea" placeholder="Textarea" id="message-textarea" />
    </div>
  </div>
  <!-- Checkbox -->
  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input type="checkbox" />
        I agree to the <a href="#!">terms and conditions</a>
      </label>
    </div>
  </div>
  <!-- Radio Buttons-->
  <div class="field">
    <div class="control">
      <label class="radio">
        <input type="radio" name="question" />
        Yes
      </label>
      <label class="radio">
        <input type="radio" name="question" />
        No
      </label>
    </div>
  </div>
  <!-- Buttons -->
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-primary">Submit</button>
    </div>
    <div class="control">
      <button class="button is-secondary">Cancel</button>
    </div>
  </div>
</section>

<section class="section is-component-section">
  <div id="input-elements" class="pattern-anchor"></div>
  <h2>Input Elements</h2>
  <!-- Text Input -->
  <div class="field is-first">
    <label class="label" for="input-text">Text Input</label>
    <div class="control">
      <input
        class="input"
        id="input-text"
        type="text"
        placeholder="Text Input"
      />
    </div>
  </div>
  <!-- Disabled -->
  <div class="field">
    <label class="label" for="input-disabled">Disabled Text Input</label>
    <div class="control">
      <input
        class="input"
        id="input-disabled"
        type="text"
        placeholder="Disabled Text Input"
        disabled
      />
    </div>
  </div>  
  <!-- Password -->
  <div class="field">
    <label class="label" for="input-password">Password</label>
    <div class="control">
      <input
        class="input"
        id="input-password"
        type="password"
        placeholder="Type your Password"
      />
    </div>
  </div>
  <!-- URL -->
  <div class="field">
    <label class="label" for="input-webaddress">URL</label>
    <div class="control">
      <input
        class="input"
        id="input-webaddress"
        type="url"
        placeholder="http://yoursite.com"
      />
    </div>
  </div>
  <!-- Email -->
  <div class="field">
    <label class="label" for="input-emailaddress">Email Address</label>
    <div class="control">
      <input
        class="input"
        id="input-emailaddress"
        type="email"
        placeholder="name@email.com"
      />
    </div>
  </div>
  <!-- Phone Number -->
  <div class="field">
    <label class="label" for="input-phone">Phone Number</label>
    <div class="control">
      <input
        class="input"
        id="input-phone"
        type="tel"
        placeholder="(999) 999-9999"
      />
    </div>
  </div>
  <!-- Search -->
  <div class="field">
    <label class="label" for="input-search">Search</label>
    <div class="control">
      <input
        class="input"
        id="input-search"
        type="search"
        placeholder="Enter Search Term"
      />
    </div>
  </div>
  <!-- Number -->
  <div class="field">
    <label class="label" for="input-number">Number</label>
    <div class="control">
      <input
        type="number"
        class="input"
        id="input-number"
        min="0"
        max="100"
        value="55"
      />
    </div>
  </div>
  <!-- Error -->
  <div class="field">
    <label class="label" for="input-error">Error</label>
    <div class="control">
      <input
        class="input error is-danger"
        id="input-error"
        type="text"
        placeholder="Text Input"
      />
    </div>
  </div>
  <!-- Valid -->
  <div class="field">
    <label class="label" for="input-valid">Valid</label>
    <div class="control">
      <input
        class="input success is-success"
        id="input-valid"
        type="text"
        placeholder="Text Input"
      />
    </div>
  </div>

  <div class="field">
    <label class="label" for="input-date">Date</label>
    <div class="control">
      <input type="date" value="2023-02-01" class="input" id="input-date" />
    </div>
  </div>

  <hr>

  <!-- Search -->
  <div class="field">
    <label class="label" for="input-search">Search</label>
    <div class="control">
      <input
        class="input"
        id="input-search"
        type="text"
        placeholder="Search"
        style="width: 50%"
      />
      <button class="button icon-only">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  </div>
  <!-- Login -->
  <div class="field">
    <label class="label" for="input-username">Login</label>
    <div class="control">
      <input
        class="input"
        type="text"
        id="input-username"
        placeholder="Username"
        style="width:30%"
      />
      <input
        class="input"
        type="text"
        id="input-password"
        placeholder="Password"
        style="width: 30%"
      />
      <button class="button is-primary">Submit</button>
    </div>
  </div>

  <hr>

  <!-- Range Sliders-->
  <div class="field">
    <label class="label" for="input-range">Range</label>
    <div class="control">
      <input         
        type="range"
        min={sliderAMin}
        max={sliderAMax}
        class="slider is-medium is-fullwidth is-circle"
        id="input-range"
        bind:value={sliderAVal}
      />
      <output for="sliderMedium" id="sliderMediumTooltip"><strong>{sliderAVal}</strong></output>
    </div>

    <div class="control">
      <input         
        type="range"
        min={sliderBMin}
        max={sliderBMax}
        class="slider is-large is-fullwidth is-circle"
        id="input-range"
        bind:value={sliderBVal}
      />
      <output for="sliderMedium" id="sliderMediumTooltip"><strong>{sliderBVal}</strong></output>
    </div>
  </div>

  <hr>

  <h2>Select Elements</h2>

  <div class="field is-first">
    <label class="label" for="input-select">Select Box</label>
    <div class="select">
      <select>
        <option>Select dropdown .select</option>
        <option>With options</option>
        <option>Options</option>
      </select>
    </div>

    <div class="select is-primary">
      <select>
        <option>Select dropdown .is-primary</option>
        <option>With options</option>
        <option>Options</option>
      </select>
    </div>
  </div>  

  <div class="field">
    <label class="label" for="input-select">Select Box - Option Group</label>
    <div class="select">
      <select>
        <optgroup label="First Group">
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </optgroup>
        <optgroup label="Second Group">
          <option>Option Four</option>
          <option>Option Five</option>
          <option>Option Six</option>
        </optgroup>
      </select>
    </div>
  </div>  
  
  <div class="field">
    <label class="label" for="input-select">Select Box - Multiple</label>
    <div class="select is-multiple">
      <select multiple size="4">
        <option value="Argentina">Argentina</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Brazil">Brazil</option>
        <option value="Chile">Chile</option>
        <option value="Colombia">Colombia</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Guyana">Guyana</option>
        <option value="Paraguay">Paraguay</option>
        <option value="Peru">Peru</option>
        <option value="Suriname">Suriname</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Venezuela">Venezuela</option>
      </select>
    </div>
  </div>  
  <hr>

  <h2>Checkboxes</h2>
  <div class="field is-first">
    <label class="checkbox">
      <input type="checkbox">
      Remember me
    </label>
  </div>  

  <div class="field">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#!">terms and conditions</a>
    </label>
  </div>  
  <hr>
  
  <h2>Text Area</h2>
  <p>Text area spans the full width of its parent container by default</p>
  <div class="field is-first">
    <label class="label" for="input-ta1">Default: Rows="5"</label>
    <textarea class="textarea" id="ta1" placeholder="e.g. Hello world"></textarea>
  </div>

  <div class="field">
    <label class="label" for="input-ta2">Rows="2"</label>
    <textarea class="textarea" id="ta2" rows="2" placeholder="e.g. Hello world"></textarea>
  </div>
  <hr>
  
  <h2>Buttons</h2>
  <div class="buttons is-first">
    <a href="#!" class="button">Anchor</a>
    <button class="button">Button</button>
    <input class="button" type="submit" value="Submit input">
    <input class="button" type="reset" value="Reset input">
  </div>  

  <div class="buttons">
    <button class="button is-white">White</button>
    <button class="button is-light">Light</button>
    <button class="button is-dark">Dark</button>
    <button class="button is-black">Black</button>
    <button class="button is-text">Text</button>
    <button class="button is-ghost">Ghost</button>    
  </div> 
  
  <div class="buttons">
    <button class="button is-primary">Primary</button>    
  </div>
  
  <div class="buttons">
    <button class="button is-link">Link</button>
    <button class="button is-info">Info</button>
    <button class="button is-success">Success</button>
    <button class="button is-warning">Warning</button>
    <button class="button is-danger">Danger</button>
  </div>  
  
  <div class="buttons">
    <button class="button is-primary is-light">Primary</button>
    <button class="button is-link is-light">Link</button>
  </div>
  
  <div class="buttons">
    <button class="button is-info is-light">Info</button>
    <button class="button is-success is-light">Success</button>
    <button class="button is-warning is-light">Warning</button>
    <button class="button is-danger is-light">Danger</button>
  </div>

  <div class="buttons">
    <button class="button is-small">Small</button>
    <button class="button">Default</button>
    <button class="button is-normal">Normal</button>
    <button class="button is-medium">Medium</button>
    <button class="button is-large">Large</button>    
  </div>

  <div class="buttons are-medium">
    <button class="button">All</button>
    <button class="button">Medium</button>
    <button class="button">Size</button>
    <button class="button is-small">This is Small</button>
    <button class="button is-normal">This is Normal</button>
    <button class="button">Medium</button>    
  </div>

  <div class="buttons">
    <button class="button is-outlined">Outlined</button>
    <button class="button is-primary is-outlined">is-primary</button>
    <button class="button is-link is-outlined">is-link</button>
    <button class="button is-info is-outlined">is-info</button>
    <button class="button is-success is-outlined">is-success</button>
    <button class="button is-danger is-outlined">is-danger</button>    
  </div>

  <div class="buttons">
    <button class="button is-primary is-inverted">Inverted is-primary</button>
    <button class="button is-link is-inverted">Inverted is-link</button>
    <button class="button is-info is-inverted">Inverted is-info</button>
    <button class="button is-success is-inverted">Inverted is-success</button>
    <button class="button is-danger is-inverted">Inverted is-danger</button>    
  </div>

  <div class="buttons">
    <button class="button is-rounded">Rounded</button>
    <button class="button is-primary is-rounded">is-primary</button>
    <button class="button is-link is-rounded">is-link</button>
    <button class="button is-info is-rounded">is-info</button>
    <button class="button is-success is-rounded">is-success</button>
    <button class="button is-danger is-rounded">is-danger</button>    
  </div>

  <div class="buttons">
    <button class="button is-loading">Loading</button>
    <button class="button is-primary is-loading">Loading</button>
    <button class="button is-link is-loading">Loading</button>
    <button class="button is-info is-loading">Loading</button>
    <button class="button is-success is-loading">Loading</button>
    <button class="button is-warning is-loading">Loading</button>
    <button class="button is-danger is-loading">Loading</button>    
  </div>

  <div class="buttons">
    <button class="button" title="Disabled button" disabled>Disabled</button>
    <button class="button is-primary" title="Disabled button" disabled>is-primary</button>
    <button class="button is-link" title="Disabled button" disabled>is-link</button>
    <button class="button is-info" title="Disabled button" disabled>is-info</button>
    <button class="button is-success" title="Disabled button" disabled>is-success</button>
    <button class="button is-warning" title="Disabled button" disabled>is-warning</button>
    <button class="button is-danger" title="Disabled button" disabled>is-danger</button>    
  </div>

  <p class="buttons">
    <button class="button">
      <span class="icon is-small">
        <!-- <i class="fas fa-bold"></i> -->
        <FontAwesomeIcon icon={faMeteor} />
      </span>
    </button>
    <button class="button">
      <span class="icon is-small">
        <!-- <i class="fas fa-italic"></i> -->
        <FontAwesomeIcon icon={faPenNib} />
      </span>
    </button>
    <button class="button">
      <span class="icon is-small">
        <!-- <i class="fas fa-underline"></i> -->
        <FontAwesomeIcon icon={faGhost} />
      </span>
    </button>
  </p>

  <p class="buttons">
    <button class="button">
      <span class="icon">
        <!-- <i class="fab fa-github"></i> -->
        <FontAwesomeIcon icon={faCircleUser} />
      </span>
      <span>@username</span>
    </button>
    <button class="button is-primary">
      <span class="icon">
        <!-- <i class="fab fa-twitter"></i> -->
        <FontAwesomeIcon icon={faDroplet} />
      </span>
      <span>Adjust Color</span>
    </button>
    <button class="button is-success">
      <span class="icon is-small">
        <!-- <i class="fas fa-check"></i> -->
        <FontAwesomeIcon icon={faPooStorm} />
      </span>
      <span>Save</span>
    </button>
    <button class="button is-danger is-outlined">
      <span>Delete</span>
      <span class="icon is-small">
        <!-- <i class="fas fa-times"></i> -->
        <FontAwesomeIcon icon={faRocket} />
      </span>
    </button>
  </p>

  <p class="buttons">
    <button class="button is-small">
      <span class="icon is-small">
        <!-- <i class="fab fa-github"></i> -->
        <FontAwesomeIcon icon={faDragon} />
      </span>
      <span>GitHub</span>
    </button>
    <button class="button">
      <span class="icon">
        <!-- <i class="fab fa-github"></i> -->
        <FontAwesomeIcon icon={faDragon} />
      </span>
      <span>GitHub</span>
    </button>
    <button class="button is-medium">
      <span class="icon">
        <!-- <i class="fab fa-github"></i> -->
        <FontAwesomeIcon icon={faDragon} />
      </span>
      <span>GitHub</span>
    </button>
    <button class="button is-large">
      <span class="icon is-medium">
        <!-- <i class="fab fa-github"></i> -->
        <FontAwesomeIcon icon={faDragon} />
      </span>
      <span>GitHub</span>
    </button>
  </p>

  <h2>Grouped</h2>
  <div class="field is-first is-grouped">
    <p class="control">
      <button class="button is-link">
        Save changes
      </button>
    </p>
    <p class="control">
      <button class="button">
        Cancel
      </button>
    </p>
    <p class="control">
      <button class="button is-danger">
        Delete post
      </button>
    </p>
  </div>

  <h2>Addons</h2>
  <div class="field is-first has-addons">
    <p class="control">
      <button class="button">
        <span class="icon is-small">
          <!-- <i class="fas fa-align-left"></i> -->
          <FontAwesomeIcon icon={faVirusCovid} />
        </span>
        <span>Left</span>
      </button>
    </p>
    <p class="control">
      <button class="button">
        <span class="icon is-small">
          <!-- <i class="fas fa-align-center"></i> -->
          <FontAwesomeIcon icon={faUserAstronaut} />
        </span>
        <span>Center</span>
      </button>
    </p>
    <p class="control">
      <button class="button">
        <span class="icon is-small">
          <!-- <i class="fas fa-align-right"></i> -->
          <FontAwesomeIcon icon={faStroopwafel} />
        </span>
        <span>Right</span>
      </button>
    </p>
  </div>

  <div class="buttons has-addons">
    <button class="button">Yes</button>
    <button class="button">Maybe</button>
    <button class="button">No</button>
  </div>


  <div class="buttons"></div>

</section>

<style>
  .is-first {
    margin-top: 1.5rem;
  }
</style>
