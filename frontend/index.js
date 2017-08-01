import powertakerEn from './module_powertaker_form/en';
import powertakerDe from './module_powertaker_form/de';
import adminEn from './admin/en';
import adminDe from './admin/de';

export default {
  'en-US': { ...powertakerEn, ...adminEn },
  'de-DE': { ...powertakerDe, ...adminDe },
};
