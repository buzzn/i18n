import meters from './de/meters';
import registers from './de/registers';
import contracts from './de/contracts';
import persons from './de/persons';
import tariffs from './de/tariffs';
import payments from './de/payments';
import organizations from './de/organizations';
import addresses from './de/addresses';
import formulas from './de/formulas';

export default {
  ...meters,
  ...registers,
  ...contracts,
  ...persons,
  ...tariffs,
  ...payments,
  ...organizations,
  ...addresses,
  ...formulas,
};
