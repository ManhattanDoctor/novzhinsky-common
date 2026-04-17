import * as _ from "lodash";

export class ObjectUtil {
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public static copy(from: any, to: any): boolean {
        if (_.isNil(from) || _.isNil(to) || _.isEmpty(from)) {
            return false;
        }
        let isChanged = false;
        for (let [key, value] of Object.entries(from)) {
            if (_.isUndefined(value) || !ObjectUtil.isSimple(value)) {
                continue;
            }
            if (value === to[key]) {
                continue;
            }
            to[key] = value;
            isChanged = true;
        }
        return isChanged;
    }

    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------

    private static isSimple(item: any): boolean {
        return _.isNumber(item) || _.isString(item) || _.isBoolean(item) || _.isDate(item) || _.isArray(item) || item === null;
    }
}