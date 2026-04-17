import { User } from './User';
import * as _ from 'lodash';

export class UserUtil {
    // --------------------------------------------------------------------------
    //
    //  Common Methods
    //
    // --------------------------------------------------------------------------

    public static getUid(id: string | number): string {
        return `user-[${id}]`;
    }

    public static update(params: any, item: User): boolean {
        let isChanged = false;
        if (!_.isNil(params?.preferences)) {
            for (let key of Object.keys(params.preferences)) {
                if (item.preferences[key] !== params.preferences[key]) {
                    item.preferences[key] = params.preferences[key];
                    isChanged = true;
                }
            }
        }
        return isChanged;
    }
}
