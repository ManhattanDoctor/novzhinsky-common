import { ClassType, TransformUtil } from "@ts-core/common";
import { TransformFnParams } from "class-transformer";
import { IUserPreferences } from "./IUserPreferences";
import { UserPreferences } from "./UserPreferences";
import * as _ from 'lodash';

export class UserFactory {
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public static transformPreferences<T extends IUserPreferences>(item: TransformFnParams): T {
        let type = item.obj.type;
        let classType: ClassType<IUserPreferences> = null;
        switch (type) {
            default:
                classType = UserPreferences;
        }
        return TransformUtil.toClass(classType, item.value) as T;
    }
}