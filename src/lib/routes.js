
// Components
import Home from '../routes/DesignTokens.svelte'
import UI from '../routes/UI.svelte'
import UIHeadings from '../routes/UIHeadings.svelte'
import UIParagraphs from '../routes/UIParagraphs.svelte'
import UILists from '../routes/UILists.svelte'
import UIInline from '../routes/UIInline.svelte'

import Forms from '../routes/Forms.svelte'
import Tables from '../routes/Tables.svelte'
import Widgets from '../routes/Widgets.svelte'

import NotFound from '../routes/NotFound.svelte'

// Export the route definition object
export default {
    // Exact path
    '/': Home,
    '/components/ui': UI,
    '/components/ui/headings': UIHeadings,
    '/components/ui/paragraphs': UIParagraphs,
    '/components/ui/lists': UILists,
    '/components/ui/inline': UIInline,
    '/components/forms': Forms,
    '/components/tables': Tables,
    '/components/widgets': Widgets,

    // Using named parameters, with last being optional
    // '/hello/:first/:last?': Forms,

    // Wildcard parameter
    // Included twice to match both `/wild` (and nothing after) and `/wild/*` (with anything after)
    // '/wild': Wild,
    // '/wild/*': Wild,

    // Catch-all, must be last
    '*': NotFound,
}