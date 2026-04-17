
export * from './Error';
//
import { UserUtil } from './user';
//
export function getSocketUserRoom(id: string): string {
    return UserUtil.getUid(id);
}
