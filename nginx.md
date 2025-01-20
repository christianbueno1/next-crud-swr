## Information
- nginx:1.27.3-alpine3.20
- registry.access.redhat.com/ubi9/nginx-124

```
# Run the container in foreground
podman run --name mynginx -p 8080:80 nginx:1.27.3-alpine3.20

podman exec -it mynginx sh
# edit index.html
vi /usr/share/nginx/html/index.html

curl localhost:8080

# run in detach and tty
podman run -dt --name mynginx -p 8080:80 nginx:1.27.3-alpine3.20
```

## Step 5: Learning Important Nginx Files and Directories Now
```
# default html
ls -l /usr/share/nginx/html/index.html
# Configuring the Server
ls -l /etc/nginx
# The main Nginx configuration file is located in
ls -l /etc/nginx/nginx.conf
# The server block configuration files in this directory allow you to specify the websites that Nginx hosts.
ls -l /etc/nginx/conf.d/

# Client Logs
# Unless Nginx is set otherwise, every request to your web server is recorded in this log file.
sudo tail -f /var/log/nginx/access.log

# This log will contain any Nginx errors.
/var/log/nginx/error.log


```
## 4. Configuring Access Logs
```
# Open the configuration file with a text editor:
sudo nano /etc/nginx/nginx.conf
# Look for the http block and modify or add the access_log directive:
http {
    ...
    access_log /var/log/nginx/access.log;  # Change path if needed
    ...
}
# To apply changes, test your configuration for syntax errors:
sudo nginx -t
# If there are no errors, reload Nginx to apply the changes:
sudo systemctl reload nginx

```
## 5. Viewing Error Logs
```
# To inspect error logs for issues encountered by Nginx, use a similar command:
sudo tail -f /var/log/nginx/error.log

```
## 6. Using Journalctl (for systemd)
```
# If your Nginx is managed by systemd, you can also view logs using journalctl:
sudo journalctl -u nginx.service -f

```

## Step 6: Setting up Server Blocks Here in Final Step {Optional}.
- https://www.dedicatedcore.com/blog/install-nginx-on-rocky-linux/
```
sudo mkdir -p /var/www/your_domain/html
sudo mkdir -p /var/www/guayaco.com/public_html

# The $USER environment variable, which should belong to your current system user, should then be used to assign ownership of the directory:
sudo chown -R $USER:$USER /var/www/your_domain/html

# To test the server block settings, you will now create an example index.html page.
vim /var/www/your_domain/html/index.html
```

## Create a new Nginx configuration file for your application:
- nextjs, nginx, AlmaLinux
- https://www.hostmycode.in/tutorials/host-nextjs-application-with-nginx-on-almalinux
```
sudo vi /etc/nginx/conf.d/your-domain.conf

# Add the following configuration:
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Test the Nginx configuration to ensure there are no errors:
sudo nginx -t
# If the test is successful, restart Nginx:
sudo systemctl restart nginx

```

# Podman, Nextjs web app
```

```