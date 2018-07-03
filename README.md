# TokenPlay eWallet

The TokenPlay eWallet is provided as part of our OpenSource initiative at BlocPlay Entertainment. It is based on the amazing work done by the OmiseGO team through the Apache2 license. A big shout out to the amazing work OmiseGO's dev team has been doing.

Does this mean TokenPlay will be supporting OMG Tokens? Yes. The intention of TokenPlay is to fully support OMG tokens and ensure our technology works closely with the dev work the OmiseGO team is currently doing with Ethereum and Vitalik Buterin.

If you would like more information on this system please contact [Vince McMullin](https://github.com/vamman), CTO.

# Disclaimer

## Alpha

TokenPlay and all of its systems are under heavy active development and we strongly advise against using these systems in production at this time.

__Use at your own risk.__

# Online Demo
[eWallet Demo](http://ewallet.tokenplay.com/)

Play around with the complete set of backend APIs in development for TokenPlay!

  • eWallet API's Server endpoints
  • eWallet API's Client endpoints
  • Admin API's Client endpoints
  • Admin API's User endpoints

We use Swagger to test endpoints via an Elixir based webservice running Cowboy. This webservice runs on port 4000 but is provided to you via a reverse proxy on port 80. This environment is currently pointed to our development environment and is constantly undergoing development. If the service is down or not accessible please let us know.

We will be putting a stable or staging build in place as development progresses for future proofing demos not impacted by development.

Now on to the endpoints. The endpoints can be consumed by any client. Swagger provides the ability to engage and test the endpoint directly without having to venture to another browser based tool. However, if you do decide to do this I recommend studying what is needed and ensure base encoding of your api keys is proper.

There is ClientAuth and ServerAuth. Anything that modifies the database uses ServerAuth. Anything that simply queries the database for data uses ClientAuth. Each require their own key to access the system.

## Try eWallet API's Server endpoints

- Browse to http://ewallet.tokenplay.com/api/docs
- Click the Authorize button
- Use the value below for ServerAuth:
```
    PLAYServer U0Y3aGk0NTRsOURINmpHM1loNDdWVEVKelpxcXlUb016ejA3eUtmUmtLODpTV2pRbzdwUmh4X0F4Q2gyYnBFYTdIUTVNWmI2UG1aRXUtamVPc0ViUHlv
```
- Try out Server endpoints such as /login, /user.create, /transfer, etc.

## Try eWallet API's Client endpoints

- Browse to http://ewallet.tokenplay.com/api/docs
- Click the Authorize button
- Use the value below for ClientAuth:
```
    PLAYClient a01pdDMzSjMwdVZaUkZ4ZkhpNVRVV052YmZtaDVoTHl5c3pCc016WngwNDpLVFVMeW9sS0x1b19kT1hQTWI0UHk0WUdKa3pXT2htNFcyUmJvVG4xTWZB
```
- Try out Client endpoints such as /me.get, /me.list_transactions, /logout, etc.

## Try Admin API's Client endpoints

- Browse to http://ewallet.tokenplay.com/admin/api/docs.ui
- Click the Authorize button
- Use the value below for ClientAuth:
```
    PLAYAdmin YTY5OTdkY2ItMDE2Yi00ZTM4LWJjN2UtMjRjMmI2MmI0M2VlOms5elZyTG5Obmp6dnV2Y1E0MmlxX1ctdHAyWV9kWm5XRHV6SUNrWHJnOVE=
```
- Try out Client endpoints such as /login, /password.reset, /password.update, etc.

## Try Admin API's User endpoints

- Browse to http://ewallet.tokenplay.com/admin/api/docs.ui
- Click the Authorize button
- Use the value below for UserAuth:
```
    PLAYAdmin YTY5OTdkY2ItMDE2Yi00ZTM4LWJjN2UtMjRjMmI2MmI0M2VlOms5elZyTG5Obmp6dnV2Y1E0MmlxX1ctdHAyWV9kWm5XRHV6SUNrWHJnOVE6NjVlYzM4OGMtMzMyMC00OTkxLWE1NTctNzI5YWM4NjhjYjBmOmpZZnlBODVONzhsYUJ1dTB2V2lFenp0S3Z5MXlwaHNqUWJqdnByc1pwTVk=
```
- Try out User endpoints such as /account.create, /account.assign_user, /access_key.create, etc.


# TokenPlay Architecture
![TokenPlay Architecture](http://app.blocplays.com/tokenplay_arch.png)

The TokenPlay architecture consists of the following backends:
- eWallet Backend
- Gamer Backend
- Developer Backend

This repository contains the code for our existing eWallet Backend which is used to authenicate all of our services against. This development strategy supports developing an architecture is hot swappable, fail safe, and potentially scalable.

During development we will be committing code against our eWallet which will likely be moved out into its own module or backend system.

# TL;DR

Release: This is the latest public release of our codebase.

Staging: This is the most up to date build of our codebase.

(http://ewallet.tokenplay.com/) [Release]

(http://mac.tokenplay.com/) [Staging]

Sample Frontend: Coming soon developed in ElectronJS!

# Setup on macosx High Sierra

We use the Laptop script (see: https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/ ) to setup our dev environment from scratch:

```
bash <(curl -s https://raw.githubusercontent.com/monfresh/laptop/master/laptop)
```

- Bundler for managing Ruby gems
- chruby for managing Ruby versions
- Flux for adjusting your Mac's display color so you can sleep better
- GitHub Desktop for setting up your SSH keys automatically
- Heroku Toolbelt for deploying and managing Heroku apps
- Homebrew for managing operating system libraries
- Homebrew Cask for quickly installing Mac apps from the command line
- Homebrew Services so you can easily stop, start, and restart services
- hub for interacting with the GitHub API
- PhantomJS for headless website testing
- Postgres for storing relational data
- ruby-install for installing different versions of Ruby
- Sublime Text 3 for coding all the things
- Zsh as your shell (if you opt in)


## Install depends
Once the Laptop script is done we need to install or build specifics:

- [PostgreSQL](https://www.postgresql.org/): PostgreSQL is used to store most of the data for the eWallet API and local ledger.

- [ImageMagick](https://www.imagemagick.org/script/index.php): ImageMagick is used to format images in the admin panel. Tested with version > 7.0.7-22.

- [Libsodium](https://github.com/jedisct1/libsodium): Sodium is a new, easy-to-use software library for encryption, decryption, signatures, password hashing and more. It is used to hash and encrypt/decrypt sensitive data.

- [Elixir](http://elixir-lang.github.io/install.html): Elixir is a dynamic, functional language designed for building scalable and maintainable applications.

- [Git](https://git-scm.com/): Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

```
brew update
brew install imagemagick
brew install elixir
brew install subversion
brew install git
brew install yarn
brew install postgres
brew install autogen
brew install rebar
brew install rebar3
```

## Compile Libsodium & nacl

```
cd ~/
mkdir Source
cd ~/Source
git clone https://github.com/jedisct1/libsodium.git
cd libsodium
./autogen.sh
./configure
make && make check
sudo make install
```

```
cd ~/Source
git clone https://github.com/jlouis/enacl
cd enacl
rebar make
make eqc_run
```

## Setup postgres

```
nano /usr/local/var/postgres/pg_hba.conf
Enable your access:
host all all 127.0.0.1/32 md5
brew services restart postgresql
psql -d postgres
```

From psql console:
```
CREATE USER postgres SUPERUSER;
CREATE DATABASE postgres WITH OWNER postgres;
\password
\q
```

## Setup apache
```
sudo apachectl stop
sudo launchctl unload -w /System/Library/LaunchDaemons/org.apache.httpd.plist
brew install httpd
```

## Clone source

```
cd ~/
mkdir Source
cd Source
```

```
git clone https://github.com/blocplay/ewallet.git ewallet
cd ewallet
```

## Setup ewallet depends
```
mix deps.get
```

```
cd ~/Source/ewallet
cd apps/admin_panel/assets/ && yarn install
```

## Setup ewallet config

```
nano ~/Source/ewallet/apps/ewallet_db/config/dev.exs
base_url: "http://xxx.tokenplay.com"
```

You can change the db credentials as well if you like.

## Create && || Migrate DB

```
cd ~/Source/ewallet
mix do ecto.create, ecto.migrate
```

## Seed DB
```
mix seed
```

## Seed DB with Sample Data
```
mix seed --sample
```

## Start the Backend!

```
mix play.server
```

Port 4000 is the port the standard elixir backend runs on.

We will create a reverse proxy using Apache2.


## Configure Apache2

We are using the built in version of apache on macosx. Any option is possible.

```
cd /usr/local/etc/apache2
```

```
sudo nano /usr/local/etc/apache2/httpd.conf
```

Enable proxy module

Uncomment:

```
Include /usr/local/etc/httpd/extra/httpd-vhosts.conf
```

```
sudo nano /etc/apache2/extra/httpd-vhosts.conf
```

```
<VirtualHost *:80>
        ServerName xxx.tokenplay.com

        #ServerAdmin webmaster@localhost
        #DocumentRoot /var/www/html

        ProxyPass / http://127.0.0.1:4000/
        ProxyPassReverse / http://127.0.0.1:4000/

</VirtualHost>
```

## Extras for osx

```
open port 80
sudo nano /etc/pf.conf
```

add:
pass in proto tcp from any to any port 80

```
sudo reboot
sudo brew services start httpd
```
