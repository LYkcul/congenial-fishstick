import { UserModel, PRIV } from 'hydrooj';

export async function run({uid, avatarUrl = "url:/banned.png", backgroundUrl = "/banned_background.png"}) {
    await UserModel.setPriv(uid, PRIV.PRIV_NONE);
    await UserModel.setById(uid, {avatar: avatarUrl});
    await UserModel.setById(uid, {backgroundImage: backgroundUrl});
}