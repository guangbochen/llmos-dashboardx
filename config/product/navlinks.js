import { DSL } from '@/store/type-map';
import { UI } from '@/config/types';
import { NAME as NAME_COL, STATE, AGE } from '@/config/table-headers';

export const NAME = 'navlinks';

export function init(store) {
  const { product, headers } = DSL(store, NAME);

  product({
    ifHaveType: UI.NAV_LINK,
    icon:       'external-link',
  });

  headers(UI.NAV_LINK, [
    STATE,
    NAME_COL,
    {
      name:  'label',
      value: 'labelDisplay',
      sort:  'labelDisplay',
    },
    {
      name:   'to',
      value:  'link',
      search: ['spec.toURL', 'spec.toService.namespace', 'spec.toService.name', 'spec.toService.port'],
    },
    AGE
  ]);
}
