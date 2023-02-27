# How to translate parts of the app

There are two occasions

## 1. just adding translations

If you go to the Home Page will see the banner with the text
`Colorful summer dresses are already in store`.

For translating this you need to search ( <kbd>Ctl+Sh+F</kbd> in Webstorm)
and then you will find the phrase in 3-4 files. One of these is `Home.vue`
and the rests are the translation-files.

At `Home.vue` our interesting line is

>    title: app.i18n.t('Colorful summer dresses are already in store'),

and in the file of greek translation is the below

>    "Colorful summer dresses are already in store": "Colorful summer dresses are already in store",

If we change, the value of this key in something like that

>    "Colorful summer dresses are already in store": "Τι ωραίο φόρεμα χριστούλη μου",

τότε θα δούμε και πως θα έχουμε τροποποιήσει και την ελληνική έκδοση της εφαρμογής και θα
έχουμε πραγματοποιήσει μια μετάφραση.


## 2. having to add translation function

If you go to the Category Page, in the left sidebar are the filters.

You can see, if scroll down a bit, that the Size is translated, but the Color is not.

The first one is translated because at the file
`modules/catalog/category/components/filters/renderer/CheckboxType.vue`
in the `line 6` from

>   :title="filter.label"

is modified to

>   :title="$t(filter.label)".


If you make the same and in the other components which consist of
the Filters, then you will have translations in all the Filters part
of the App

You can start with
`modules/catalog/category/components/filters/renderer/SwatchColorType.vue`

