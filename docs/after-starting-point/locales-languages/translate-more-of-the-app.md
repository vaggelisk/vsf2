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


## 2.
