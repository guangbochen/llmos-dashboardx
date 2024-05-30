import { flowOutput } from '@/utils/validators/flow-output';
import { clusterIp, externalName, servicePort } from '@/utils/validators/service';
import { interval, matching } from '@/utils/validators/monitoring-route';
import { containerImages } from '@/utils/validators/container-images';
import { cronSchedule } from '@/utils/validators/cron-schedule';
import { podAffinity } from '@/utils/validators/pod-affinity';
import { roleTemplateRules } from '@/utils/validators/role-template';
import { clusterName } from '@/utils/validators/cluster-name';
import { isHttps, backupTarget } from '@/utils/validators/setting';

/**
* Custom validation functions beyond normal scalr types
* Validator must export a function name should match the validator name on the customValidationRules rule
* Exported function is used as a lookup key in resource-class:validationErrors:customValidationRules loop
*/
export default {
  clusterName,
  clusterIp,
  externalName,
  flowOutput,
  interval,
  servicePort,
  matching,
  containerImages,
  cronSchedule,
  podAffinity,
  roleTemplateRules,
  isHttps,
  backupTarget,
};
