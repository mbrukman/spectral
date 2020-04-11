import { IFunction, IFunctionResult, IRule, RuleFunction } from '../types';

export interface IEnumRuleOptions {
  values: Array<string | number>;
}

export type EnumRule = IRule<RuleFunction.ENUM, IEnumRuleOptions>;

export const enumeration: IFunction<IEnumRuleOptions> = (targetVal, opts) => {
  if (targetVal === void 0) return;

  const { values } = opts!; // todo: validate

  const results: IFunctionResult[] = [];

  if (!values.includes(targetVal)) {
    results.push({
      message: `${targetVal} does not equal to one of ${values}`,
    });
  }

  return results;
};
