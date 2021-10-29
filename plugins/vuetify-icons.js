import {
    mdiThemeLightDark,
    mdiCircleSmall,
    mdiCodeTags,
    mdiHeart,
    mdiGithub,
    mdiCreditCardOutline,
    mdiEmoticonDevilOutline,
    mdiAbugidaThai,
    mdiClipboardListOutline,
    mdiMagnify
} from '@mdi/js'

const MY_ICONS = {
    mdiThemeLightDark,
    mdiCircleSmall,
    mdiCodeTags,
    mdiHeart,
    mdiGithub,
    mdiCreditCardOutline,
    mdiEmoticonDevilOutline,
    mdiAbugidaThai,
    mdiClipboardListOutline,
    mdiMagnify
}

export default ({ app }, inject) => {
    // Inject $icons in Vue, context and store
    inject('icons', MY_ICONS)
}
