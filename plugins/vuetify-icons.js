import {
    mdiThemeLightDark,
    mdiCircleSmall,
    mdiCodeTags,
    mdiHeart,
    mdiGithub,
    mdiCreditCardOutline,
    mdiEmoticonDevilOutline,
    mdiAbugidaThai,
    mdiDiamondStone,
    mdiClipboardListOutline,
    mdiMagnify,
    mdiFormatFont,
    mdiPlus,
    mdiMinus,
    mdiArrowCollapseUp,
    mdiArrowExpandDown
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
    mdiDiamondStone,
    mdiClipboardListOutline,
    mdiMagnify,
    mdiFormatFont,
    mdiPlus,
    mdiMinus,
    mdiArrowCollapseUp,
    mdiArrowExpandDown
}

export default ({ app }, inject) => {
    // Inject $icons in Vue, context and store
    inject('icons', MY_ICONS)
}
