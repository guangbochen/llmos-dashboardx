import { MULTI_CLUSTER } from '@/store/features';
import { DSL } from '@/store/type-map';

export const NAME = 'manager';

export function init(store) {
  const {
    product,
    weightGroup
  } = DSL(store, NAME);

  product({
    ifFeature:           MULTI_CLUSTER,
    inStore:             'management',
    icon:                'cluster-management',
    removable:           false,
    showClusterSwitcher: false,
  });

  weightGroup('advanced', -1, true);
}
