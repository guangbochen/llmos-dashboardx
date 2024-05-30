export const NORMAN_NAME = 'field.cattle.io/name';
export const DESCRIPTION = 'field.cattle.io/description';
export const HOSTNAME = 'kubernetes.io/hostname';
// export const TIMESTAMP = 'cattle.io/timestamp';
// export const SYSTEM_NAMESPACE = 'management.cattle.io/system-namespace';
// export const PROJECT = 'field.cattle.io/projectId';
// export const DEFAULT_PROJECT = 'authz.management.cattle.io/default-project';
// export const SYSTEM_PROJECT = 'authz.management.cattle.io/system-project';
export const CONTAINER_DEFAULT_RESOURCE_LIMIT = 'field.cattle.io/containerDefaultResourceLimit';
export const CATTLE_PUBLIC_ENDPOINTS = 'field.cattle.io/publicEndpoints';
// export const TARGET_WORKLOADS = 'field.cattle.io/targetWorkloadIds';
// export const UI_MANAGED = 'management.cattle.io/ui-managed';
// export const CREATOR_ID = 'field.cattle.io/creatorId';
// export const RESOURCE_QUOTA = 'field.cattle.io/resourceQuota';

export const KUBERNETES = {
  SERVICE_ACCOUNT_UID:  'kubernetes.io/service-account.uid',
  SERVICE_ACCOUNT_NAME: 'kubernetes.io/service-account.name',
  MANAGED_BY:           'app.kubernetes.io/managed-by',
  MANAGED_NAME:         'app.kubernetes.io/name',
  INSTANCE:             'app.kubernetes.io/instance',
};

export const CERTMANAGER = { ISSUER: 'cert-manager.io/issuer-name' };

export const STORAGE = {
  DEFAULT_STORAGE_CLASS:      'storageclass.kubernetes.io/is-default-class',
  BETA_DEFAULT_STORAGE_CLASS: 'storageclass.beta.kubernetes.io/is-default-class'
};

export const MANAGEMENT_NODE = { NODE_NAME: 'management.cattle.io/nodename' };

export const NODE_ROLES = {
  CONTROL_PLANE_OLD: 'node-role.kubernetes.io/controlplane',
  CONTROL_PLANE:     'node-role.kubernetes.io/control-plane',
  WORKER:            'node-role.kubernetes.io/worker',
  ETCD:              'node-role.kubernetes.io/etcd',
};

export const CAPI = {
  DEPLOYMENT_NAME:      'cluster.x-k8s.io/deployment-name',
  CREDENTIAL_DRIVER:    'provisioning.cattle.io/driver',
  CLUSTER_NAMESPACE:    'cluster.x-k8s.io/cluster-namespace',
  FORCE_MACHINE_REMOVE: 'provisioning.cattle.io/force-machine-remove',
  MACHINE_NAME:         'cluster.x-k8s.io/machine',
  DELETE_MACHINE:       'cluster.x-k8s.io/delete-machine',
  PROVIDER:             'provider.cattle.io'
};

export const RBAC = { PRODUCT: 'management.cattle.io/ui-product' };

export const RKE = { EXTERNAL_IP: 'rke.cattle.io/external-ip' };

export const SNAPSHOT = { CLUSTER_NAME: 'rke.cattle.io/cluster-name' };

const CATTLE_REGEX = /cattle\.io\//;

export const LABELS_TO_IGNORE_REGEX = [
  CATTLE_REGEX
];

export const ANNOTATIONS_TO_IGNORE_REGEX = [
  CATTLE_REGEX
];

export const ANNOTATIONS_TO_FOLD = [
  /^kubectl\.kubernetes\.io\/.*$/,
];
