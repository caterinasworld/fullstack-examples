## Install nvm

Download the install script via curl or wget.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

Verify that nvm has been installed.

```bash
command -v nvm
```

Check version of nvm.

```bash
nvm -v
```

Check versions on Node.js available.

```bash
$ nvm ls
       v0.12.18
       v12.13.0
       v14.20.1
       v16.14.2
       v16.17.1
->     v18.10.0
         system
default -> stable (-> v18.10.0)
```

Install the Node.js LTS version.

```bash
$ nvm install --lts
Installing latest LTS version.
Downloading and installing node v16.18.0...
Downloading https://nodejs.org/dist/v16.18.0/node-v16.18.0-darwin-x64.tar.xz...
######################################################################## 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v16.18.0 (npm v8.19.2)
```

Install the latest version of Node.js.

```bash
$ nvm install node
Downloading and installing node v18.11.0...
Downloading https://nodejs.org/dist/v18.11.0/node-v18.11.0-darwin-x64.tar.xz...
######################################################################## 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v18.11.0 (npm v8.19.2)
```

Install a version of Node.js. Use the command `nvm install <version>`.

```bash
$ nvm install 16.17.1
Downloading and installing node v16.17.1...
Local cache found: ${NVM_DIR}/.cache/bin/node-v16.17.1-darwin-x64/node-v16.17.1-darwin-x64.tar.xz
Checksums match! Using existing downloaded archive ${NVM_DIR}/.cache/bin/node-v16.17.1-darwin-x64/node-v16.17.1-darwin-x64.tar.xz
Now using node v16.17.1 (npm v8.15.0)
```

Use a different version on Node.

```bash
$ nvm use <version>
$ nvm use <version-number>
$ nvm use <version-name>
```

```bash
$ nvm use 14.20.1
Now using node v14.20.1 (npm v6.14.17)
```

Uninstall a version of Node. Use the command `nvm uninstall <version>`.

```bash
$ nvm uninstall 16.7.1
Uninstalled node v16.17.1
```

Manually uninstall a version of Node.

```bash
$ cd ~/.nvm/versions/node
$ sudo rm -rf v16.7.1/
```
