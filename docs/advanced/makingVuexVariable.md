# Making a vuex variable

To make the vuex variable is not easy and it's may need to add/modify many files.

In my example, where we need a Number variable represents the points (loyaltyRate)
of the customer for buying `1 euro`, it was needed to change all these files:

```shell
A       vsf/core/data-resolver/LoyaltyService.ts
M       vsf/core/data-resolver/index.ts
M       vsf/core/data-resolver/types/DataResolver.d.ts

A       vsf/core/modules/loyaltyRate/store/index.ts
A       vsf/core/modules/loyaltyRate/store/mutation-types.ts
A       vsf/core/modules/loyaltyRate/types/LoyaltyRateState.ts

A       vsf/core/modules/loyaltyRate/index.ts
M       vsf/src/themes/netsteps/config/modules.ts
M       vsf/src/modules/client.ts

M       vsf/src/themes/netsteps/helpers/index.ts
M       vsf/src/themes/netsteps/components/atoms/a-reward-points.vue
M       vsf/src/themes/netsteps/pages/ShoppingCart.vue
```

with `A` means `Adding` and `M` `Modyfying`

Here, there are also the Service, that fetch the data from the Magento API

## 1. Service

For the service we need to add/modify the 3 upper files

1. `/core/data-resolver/LoyaltyService.ts` `A`

```ts
import Task from 'core/lib/sync/types/Task';
import { TaskQueue } from '@vue-storefront/core/lib/sync'
import { DataResolver } from 'core/data-resolver/types/DataResolver';
import config from 'config';
import CmsPageState from 'core/modules/cms/types/CmsPageState';


const getLoyaltyRate = async (): Promise<Task> =>
  TaskQueue.execute({
      url: config.api.url + `/api/ext/younique-api-content/loyaltyRrate`,
    silent: true
  })

export const LoyaltyService: DataResolver.LoyaltyService = {
  getLoyaltyRate
}
```

2. `/core/data-resolver/index.ts` `M`

```ts
export const LoyaltyService = GetService<DataResolver.LoyaltyService>({
  loader: async () => (await import(/* webpackChunkName: "vsf-data-service-loyalty" */ './LoyaltyService')).LoyaltyService,
  methods: [
    'getLoyaltyRate'
  ]
})

```

3. `/core/data-resolver/types/DataResolver.d.ts` `M`

```ts
  interface LoyaltyService {
    getLoyaltyRate: () => Promise<Task>
  }
```


## 2. Vuex system

### a.  adding the module

this take place into the three below files:

1. `/core/modules/loyaltyRate/store/index.ts` `A`

```ts
import * as types from './mutation-types'
import { Module } from 'vuex'
import { StorageManager } from '@vue-storefront/core/lib/storage-manager'
import { LoyaltyRateState } from '../types/LoyaltyRateState'
import { LoyaltyService } from '@vue-storefront/core/data-resolver'
import {response} from "express";

export const loyaltyRateStore: Module<LoyaltyRateState, any> = {
  namespaced: true,
  state: {
    points: null,
  },
  getters: {
    points: state => state.points,
  },
  mutations: {
    [types.SET_POINTS] (state, payload) {
      state.points = payload
    }
  },
  actions: {
    async getPoints ({ commit } ): Promise<Number> {
      const points  = await LoyaltyService.getLoyaltyRate()
      if (points) {
        commit(types.SET_POINTS, points.result.points_earn)
      }
      return points.result.points_earn
    },
  }
}

```


2. `vsf/core/modules/loyaltyRate/store/mutation-types.ts` `A`

`export const SET_POINTS = 'SET_POINTS'`


3. `vsf/core/modules/loyaltyRate/types/LoyaltyRateState.ts` `A`

```ts
export interface LoyaltyRateState {
  points: Number | null,
}
```


### b.  register the module

this take place into the below three files:

1. `vsf/core/modules/loyaltyRate/index.ts` `A`

```ts
import { loyaltyRateStore } from './store'
import { StorefrontModule } from '@vue-storefront/core/lib/modules';
import { StorageManager } from '@vue-storefront/core/lib/storage-manager'

export const LoyaltyRateModule: StorefrontModule = function ({ store }) {
  StorageManager.init('loyaltyRate')
  store.registerModule('loyaltyRate', loyaltyRateStore)
}

```

2. `/src/themes/netsteps/config/modules.ts` `M`

```ts
import { LoyaltyRateModule } from '@vue-storefront/core/modules/loyaltyRate';

    ...

    registerModule(LoyaltyRateModule)

```

3. `/src/modules/client.ts` `M`

```ts
import { LoyaltyRateModule } from '@vue-storefront/core/modules/loyaltyRate';

    ...

    registerModule(LoyaltyRateModule)

```

Maybe one of the two above is not necessary, but has to do with the version
of the VSF


### c.  use the module in vue components

this happens in the vue components as well as in the file `helper/index.ts`
where you can add some logic




