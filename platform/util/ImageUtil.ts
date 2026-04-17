import { Sha512 } from "@ts-core/common";
import * as _ from "lodash";

export class ImageUtil {

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    private static getDiceBear(seed: string, type: string): string {
        return `https://api.dicebear.com/9.x/${type}/svg?seed=${seed}`;
    }

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static hash(uid: string): string {
        return Sha512.hex(uid).substring(0, 32);
    }

    public static getUser(uid: string): string {
        return !_.isNil(uid) ? ImageUtil.getDiceBear(ImageUtil.hash(uid).substring(0, 32), 'lorelei') : null;
    }
}
