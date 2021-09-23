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

6. 运行脚本
  ```
  node claim
  ```


