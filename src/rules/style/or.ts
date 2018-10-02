import { IOrRule, IRuleResult, IRuleMetadata } from '../../types';
import { ensureRule } from '../index';

export const or = (r: IOrRule): ((object: any, ruleMeta: IRuleMetadata) => IRuleResult[]) => {
  return (object: object, ruleMeta: IRuleMetadata): IRuleResult[] => {
    const results: IRuleResult[] = [];

    let found = false;
    for (const property of r.input.or) {
      if (typeof object[property] !== 'undefined') {
        found = true;
        break;
      }
    }
    const res = ensureRule(() => {
      found.should.be.exactly(true, r.description);
    }, ruleMeta);
    if (res) {
      results.push(res);
    }
    return results;
  };
};