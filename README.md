# TokenPlay eWallet

The TokenPlay eWallet is provided as part of our OpenSource initiative at BlocPlay Entertainment. It is based on the amazing work done by the OmiseGO team through the Apache2 license. A big shout out to the amazing work OmiseGO's dev team has been doing.

Does this mean TokenPlay will be supporting OMG Tokens? Yes. The intention of TokenPlay is to fully support OMG tokens and ensure our technology works closely with the dev work the OmiseGO team is currently doing with Ethereum and Vitalik Buterin.

# Disclaimer

## Alpha

TokenPlay and all of its systems are under heavy active development and we strongly advise against using these systems in production at this time.

__Use at your own risk.__

# TokenPlay Architecture
![TokenPlay Architecture](http://app.blocplays.com/tokenplay_arch.png)

-The TokenPlay architecture consists of the following backends:
  -eWallet Backend
  -Gamer Backend
  -Developer Backend

This repository contains the code for our existing eWallet Backend which is used to authenicate all of our services against. This development strategy supports developing an architecture is hot swappable, fail safe, and potentially scalable.

During development we will be committing code against our eWallet which will likely be moved out into its own module or backend system.

# TL;DR

# Setup on macosx High Sierra

#####
We use the Laptop script (see: https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/ ) to setup our dev environment from scratch:

bash <(curl -s https://raw.githubusercontent.com/monfresh/laptop/master/laptop)

Bundler for managing Ruby gems
chruby for managing Ruby versions
Flux for adjusting your Mac's display color so you can sleep better
GitHub Desktop for setting up your SSH keys automatically
Heroku Toolbelt for deploying and managing Heroku apps
Homebrew for managing operating system libraries
Homebrew Cask for quickly installing Mac apps from the command line
Homebrew Services so you can easily stop, start, and restart services
hub for interacting with the GitHub API
PhantomJS for headless website testing
Postgres for storing relational data
ruby-install for installing different versions of Ruby
Sublime Text 3 for coding all the things
Zsh as your shell (if you opt in)

#####
Once the Laptop script is done we need to install or build specifics:

PostgreSQL: PostgreSQL is used to store most of the data for the eWallet API and local ledger.

ImageMagick: ImageMagick is used to format images in the admin panel. Tested with version > 7.0.7-22.

Libsodium: Sodium is a new, easy-to-use software library for encryption, decryption, signatures, password hashing and more. It is used to hash and encrypt/decrypt sensitive data.

Elixir: Elixir is a dynamic, functional language designed for building scalable and maintainable applications.

Git: Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

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

#####
Compile Libsodium & nacl

cd ~/
mkdir Source
cd ~/Source
git clone https://github.com/jedisct1/libsodium.git
cd libsodium
./autogen.sh
./configure
make && make check
sudo make install

cd ~/Source
git clone https://github.com/jlouis/enacl
cd enacl
rebar make
make eqc_run

#####
Setup postgres

nano /usr/local/var/postgres/pg_hba.conf
Enable your access:
host all all 127.0.0.1/32 md5
brew services restart postgresql
psql -d postgres

From psql console:
CREATE USER postgres SUPERUSER;
CREATE DATABASE postgres WITH OWNER postgres;
\password
\q

#####
Setup apache
sudo apachectl stop
sudo launchctl unload -w /System/Library/LaunchDaemons/org.apache.httpd.plist
brew install httpd

#####
Download the svn

cd ~/
mkdir Source
cd Source

git clone https://github.com/blocplay/ewallet.git ewallet
cd ewallet

#####
Setup ewallet depends
mix deps.get

cd ~/Source/ewallet
cd apps/admin_panel/assets/ && yarn install


#####
Setup ewallet config

nano ~/Source/ewallet/apps/ewallet_db/config/dev.exs
base_url: "http://xxx.tokenplay.com"

You can change the db credentials as well if you like.

#####
Create && || Migrate DB

cd ~/Source/ewallet
mix do ecto.create, ecto.migrate

#####
Seed DB
mix seed

#####
Seed DB with Sample Data
mix seed --sample

#####
Start the Backend!

mix play.server

Port 4000 is the port the standard elixir backend runs on.

We will create a reverse proxy using Apache2.


#####
Configure Apache2

We are using the built in version of apache on macosx. Any option is possible.

cd /usr/local/etc/apache2

sudo nano /usr/local/etc/apache2/httpd.conf

Enable proxy module

Uncomment:
Include /usr/local/etc/httpd/extra/httpd-vhosts.conf

sudo nano /etc/apache2/extra/httpd-vhosts.conf

<VirtualHost *:80>
        ServerName xxx.tokenplay.com

        #ServerAdmin webmaster@localhost
        #DocumentRoot /var/www/html

        ProxyPass / http://127.0.0.1:4000/
        ProxyPassReverse / http://127.0.0.1:4000/

</VirtualHost>

# Extras for osx

open port 80
sudo nano /etc/pf.conf

add:
pass in proto tcp from any to any port 80
sudo reboot
sudo brew services start httpd
