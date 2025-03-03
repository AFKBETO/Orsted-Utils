import { Document, model, Schema } from 'mongoose';

export interface InviteInt extends Document {
    inviteId: string;
    createdBy: string;
    usedBy: string;
    joinedTime: string;
}

export const Invite = new Schema({
    inviteId: String,
    createdBy: String,
    usedBy: String,
    joinedTime: String,
});

export default model<InviteInt>('invite', Invite);
