import { DSL } from '@/store/type-map';
import { MANAGEMENT, HELM } from '@/config/types';

export const NAME = 'settings';

export function init(store) {
  const {
    product,
    basicType,
    configureType,
    virtualType,
  } = DSL(store, NAME);

  product({
    ifHaveType:          new RegExp(`${ MANAGEMENT.SETTING }`, 'i'),
    inStore:             'management',
    icon:                'globe',
    removable:           false,
    showClusterSwitcher: false,
    category:            'configuration',
  });

  virtualType({
    ifHaveType:     MANAGEMENT.SETTING,
    labelKey:       'advancedSettings.label',
    name:           'settings',
    namespaced:     false,
    weight:         100,
    icon:           'folder',
    route:          {
      name:   'c-cluster-product-resource',
      params: {
        product:  NAME,
        resource: MANAGEMENT.SETTING
      }
    }
  });

  // virtualType({
  //   ifHaveType:     MANAGEMENT.FEATURE,
  //   labelKey:       'featureFlags.label',
  //   name:           'features',
  //   namespaced:     false,
  //   weight:         99,
  //   icon:           'folder',
  //   route:          {
  //     name:   'c-cluster-product-resource',
  //     params: {
  //       product:  NAME,
  //       resource: MANAGEMENT.FEATURE
  //     }
  //   }
  // });

  virtualType({
    ifHaveType:     MANAGEMENT.SETTING,
    labelKey:       'branding.label',
    name:           'brand',
    namespaced:     false,
    weight:         98,
    icon:           'folder',
    route:          { name: 'c-cluster-settings-brand' }
  });

  virtualType({
    ifHaveType:     MANAGEMENT.SETTING,
    labelKey:       'banner.settingName',
    name:           'banners',
    namespaced:     false,
    weight:         98,
    icon:           'folder',
    route:          { name: 'c-cluster-settings-banners' }
  });

  basicType([
    'settings',
    'features',
    'brand',
    'banners'
  ]);

  configureType(MANAGEMENT.SETTING, {
    isCreatable: false,
    isRemovable: false,
    showAge:     false,
    showState:   false,
    canYaml:     false,
  });


  configureType(HELM.PROJECTHELMCHART, {
    isCreatable: true,
    isRemovable: true,
    showAge:     true,
    showState:   true,
    canYaml:     true,
  });
}
