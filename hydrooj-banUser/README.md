# hydrooj-banUser
在控制面版->脚本管理处运行 banUser 插件，参数为 `{"uid": , "avatarUrl": " ", "backgroundUrl": " "}`，其中 `uid` 填写封禁用户的 `uid`，`avatarUrl` 和 `backgroundUrl` 分别为封禁用户后该用户的头像和主页背景图，默认分别为 `/banned.png` 和 `/banned_background.png`。

例如：

- 运行 `{"uid":5}`，表示将 `uid` 为 5 的用户封禁，同时头像和主页背景图改为默认的 `/banned.png` 和 `/banned_background.png`。
- 运行 `{"uid":10, "avatarUrl":"/banAvatar.png", "backgroundUrl":"/banBackground.png"}`，表示将 `uid` 为 10 的用户封禁，同时头像和主页背景图改为 `/banAvatar.png` 和 `/banBackground.png`。

