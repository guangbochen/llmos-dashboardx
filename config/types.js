// Adapted from: https://github.com/rancher/dashboard
// Steve types
// base: /v1
export const STEVE = { PREFERENCE: 'userpreference' };

// Common native k8s types (via Steve)
// Base: /k8s/clusters/<id>/v1/
export const API_GROUP = 'apiGroups';
export const API_SERVICE = 'apiregistration.k8s.io.apiservice';
export const CONFIG_MAP = 'configmap';
export const COUNT = 'count';
export const EVENT = 'event';
export const ENDPOINTS = 'endpoints';
export const HPA = 'autoscaling.horizontalpodautoscaler';
export const INGRESS = 'networking.k8s.io.ingress';
export const NAMESPACE = 'namespace';
export const NODE = 'node';
export const NETWORK_ATTACHMENT = 'k8s.cni.cncf.io.networkattachmentdefinition';
export const NETWORK_POLICY = 'networking.k8s.io.networkpolicy';
export const POD = 'pod';
export const PV = 'persistentvolume';
export const PVC = 'persistentvolumeclaim';
export const RESOURCE_QUOTA = 'resourcequota';
export const SCHEMA = 'schema';
export const SERVICE = 'service';
export const SECRET = 'secret';
export const SERVICE_ACCOUNT = 'serviceaccount';
export const STORAGE_CLASS = 'storage.k8s.io.storageclass';
export const OBJECT_META = 'io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta';

export const RBAC = {
  ROLE:                 'rbac.authorization.k8s.io.role',
  CLUSTER_ROLE:         'rbac.authorization.k8s.io.clusterrole',
  ROLE_BINDING:         'rbac.authorization.k8s.io.rolebinding',
  CLUSTER_ROLE_BINDING: 'rbac.authorization.k8s.io.clusterrolebinding',
};

export const WORKLOAD = 'workload';

// The types that are aggregated into a "workload"
export const WORKLOAD_TYPES = {
  DEPLOYMENT:             'apps.deployment',
  CRON_JOB:               'batch.cronjob',
  DAEMON_SET:             'apps.daemonset',
  JOB:                    'batch.job',
  STATEFUL_SET:           'apps.statefulset',
  REPLICA_SET:            'apps.replicaset',
  REPLICATION_CONTROLLER: 'replicationcontroller'
};

const {
  DAEMON_SET, CRON_JOB, JOB, ...scalableWorkloads
} = WORKLOAD_TYPES;

export const SCALABLE_WORKLOAD_TYPES = scalableWorkloads;

export const METRIC = {
  NODE: 'metrics.k8s.io.nodemetrics',
  POD:  'metrics.k8s.io.podmetrics',
};

export const HELM = { PROJECTHELMCHART: 'helm.cattle.io.projecthelmchart' };

export const MONITORING = {
  ALERTMANAGER:       'monitoring.coreos.com.alertmanager',
  ALERTMANAGERCONFIG: 'monitoring.coreos.com.alertmanagerconfig',
  PODMONITOR:         'monitoring.coreos.com.podmonitor',
  PROMETHEUS:         'monitoring.coreos.com.prometheus',
  PROMETHEUSRULE:     'monitoring.coreos.com.prometheusrule',
  SERVICEMONITOR:     'monitoring.coreos.com.servicemonitor',
  THANOSRULER:        'monitoring.coreos.com.thanosruler',
  SPOOFED:            {
    RECEIVER:                         'monitoring.coreos.com.receiver',
    RECEIVER_SPEC:                    'monitoring.coreos.com.receiver.spec',
    RECEIVER_EMAIL:                   'monitoring.coreos.com.receiver.email',
    RECEIVER_SLACK:                   'monitoring.coreos.com.receiver.slack',
    RECEIVER_WEBHOOK:                 'monitoring.coreos.com.receiver.webhook',
    RECEIVER_PAGERDUTY:               'monitoring.coreos.com.receiver.pagerduty',
    RECEIVER_OPSGENIE:                'monitoring.coreos.com.receiver.opsgenie',
    RECEIVER_HTTP_CONFIG:             'monitoring.coreos.com.receiver.httpconfig',
    RESPONDER:                        'monitoring.coreos.com.receiver.responder',
    ROUTE:                            'monitoring.coreos.com.route',
    ROUTE_SPEC:                       'monitoring.coreos.com.route.spec',
    ALERTMANAGERCONFIG_RECEIVER_SPEC:       'monitoring.coreos.com.v1alpha1.alertmanagerconfig.spec.receivers',
    ALERTMANAGERCONFIG_ROUTE_SPEC:          'monitoring.coreos.com.v1alpha1.alertmanagerconfig.spec.route'
  }
};

// --------------------------------------
// 2. Only if Rancher is installed
// --------------------------------------

// Rancher Management API (via Steve)
// Base: /v1
export const MANAGEMENT = {
  UPGRADE: 'management.llmos.ai.upgrade',
  SETTING: 'management.llmos.ai.setting',
};

export const ML = {
  MODEL_FILE: 'ml.llmos.ai.modelfile',
};

// --------------------------------------
// 3. Optional add-on packages in a cluster
// --------------------------------------
// Base: /k8s/clusters/<id>/v1/

export const UI = { NAV_LINK: 'ui.cattle.io.navlink' };
