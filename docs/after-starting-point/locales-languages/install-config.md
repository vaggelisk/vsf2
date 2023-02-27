# How to config Languages

## One-language App

The very crucial point is the need to go to the MagentoAdminPanel,
and more specific to `Stores->All Stores` and `Edit` the `Default Store View`.

The value of the variable `code` should be the same as the value of the
key `defaultLocale` of the file very important file `nuxt.config.js`


```json lines
    i18n: {
      country: 'US',
      baseUrl: process.env.VSF_STORE_URL,
      strategy: 'prefix',
      locales: [
        {
          code: 'en',
          file: 'en.js',
          iso: 'en_US',
          defaultCurrency: 'EUR',
        },
        // {
        //   code: 'german',
        //   file: 'de.js',
        //   iso: 'de_DE',
        //   defaultCurrency: 'EUR',
        // },
      ],
      defaultLocale: 'en',
```

## More-languages App

For more than one language, you have also to make on the magentoAdminPanel
a second Store View in `Stores->All Stores`. Like the photo

![img.png](img.png)

It needs to edit/config a little bit both the Store View and the Main Website
Store, so the new `el` attached on Main.

But the most important for every Store View has its own language is
to go here `Admin->Store->Configuration->General->General` and
in the dropdown of below photo, select the proper value and then
in the new screen the correspondent `Locale Options`

![img_1.png](img_1.png)


