import { definePlugin, Context, Schema } from 'hydrooj';

export default definePlugin({
	apply(ctx: Context) {
		ctx.addScript(
            'banUser', 'ban user',
            Schema.object({
                uid: Schema.number(),
                avatarUrl: Schema.string(),
                backgroundUrl: Schema.string(),
            }),
            (...args) => require('./script/banUser').run(...args)
        );
    }
});
//{"uid":4, "avatarUrl": "/banned.png", "backgroundUrl": "/banned.png"}