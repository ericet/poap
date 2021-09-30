## 喂投式claim POAP js脚本

1. 安装node和git，要求nodejs版本不低于12.16.0

2. 从github上复制代码

  ```
  git clone https://github.com/ericet/poap.git
  ```

3. 安装运行脚本需要的依赖包

  ```
  npm install
  ```

4. 复制钱包地址到address_list.txt文件。每行一个地址

  ```
  0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead
  0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead
  0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead
  0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead
  0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead
  0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead
  0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead
  0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead
  0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead
  0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead
  ```

5. 复制通过POAP-bot或https://poap.website/xxxxxxxxxx 得到claim POAP的6位code(qr_hash)或是带有code的URL到claim_list.txt
比如：
```
http://poap.xyz/claim/twa7nm
http://poap.xyz/claim/l740wo
http://poap.xyz/claim/gzuf8p
http://poap.xyz/claim/trnibc
http://poap.xyz/claim/cf5la0
http://poap.xyz/claim/o05orq
http://poap.xyz/claim/qjv4ai
http://poap.xyz/claim/j7wiwo
http://poap.xyz/claim/f3tlad
```

6. 运行脚本
  ```
  node claim
  ```

## POAP-bot获取code 自动化脚本

1. 安装node和git，要求nodejs版本不低于12.16.0 (git可以不安装, 直接下载zip文件)

2. 从github上复制代码

  ```
  git clone git@github.com:waxcloud2021/discord.git
  ```

3. 安装运行脚本需要的依赖包

  ```
  npm install
  ```


4. 用浏览器打开 https://discord.com/login 登录你的discord帐号，登录成功后在你的主页里选中POAP-bot，这时浏览器的URL会显示 https://discord.com/channels/@me/xxxxxxxxxxxxxxxxxx (18位数字)，记下这18位数字(频道id)
 
![POAP bot](https://github.com/waxcloud2021/discord/blob/master/poap_bot.jpg)

  (在主页里添加POAP-bot步骤略)

5. 编辑discord.txt文件, 加入1行
  ```
  帐号1|密码1|上面的18位数字
  ```
  如果想在命令行指定帐号密码, 密码1处替换成*

6. 如果有多个discord帐号，重复6、7步，最终生成一个完整的discord.txt文件。此操作只需做一次

7. 用和步骤6同一台电脑同一个IP运行脚本(避免脚本登录时出现captcha required错误)

  ```
  node discord 暗语
  ```
  脚本依次登录discord.txt文件里帐号并向POAP-bot发送暗语以获得领取POAP的code. 获取POAP claim code后，脚本会自动领取POAP


8. 如果脚本在登录某账号时出现captcha required错误，目前没有好的解决方案，需要人工多次登录，直到discord不再要求captcha验证(?)



注：源代码来自： https://github.com/waxcloud2021/discord



