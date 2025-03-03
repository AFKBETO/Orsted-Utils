import InviteModel, { InviteInt } from '../models/InviteModel.ts';

export async function createInviteData(
    inviteId: string,
    createdBy: string,
    usedBy: string,
): Promise<InviteInt> {
    const inviteData = await InviteModel.create({
        inviteId,
        createdBy,
        usedBy,
        joinedTime: Date.now(),
    });
    return inviteData;
}
