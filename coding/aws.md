# AWS

## EC2

### Connect to EC2

```bash
#!/bin/bash
ssh -i key.pem ec2-user@public-dns
```

### Copy files from EC2 to local

```bash
scp -i key.pem ec2-user@public-dns:path/to/file /your/local/directory/files/to/download

# zip directory beforehand
zip -r all.zip /your/ec2/directory/

# download all files
scp -i key.pem ec2-user@public-dns:~/* /your/local/directory/files/to/download
```

### Onboarding

Install Git

```bash
sudo yum install git -y
```

Install Node (see also [AWS Docs](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
# check
node -e "console.log('Running Node.js ' + process.version)"
```

Switch to dedicated version (check [nodejs.org](https://nodejs.org/)):

```bash
nvm install 16.13.0
```

Use [Screen](../linux-commands/screen.md) to use different sessions for different scripts for example.
