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
  ......
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
...
```

6. 运行脚本
  ```
  node claim
  ```


