# AI-Grader

## Deploy

1. Copy and update `.env`

```bash
cp .env.example .env

# Modify your environments
NGINX_PORT=80
```

2. Update Nginx config with site and proxy.

```bash
cp .docker/nginx/default.example.conf .docker/nginx/default.conf
```

```conf
# .docker/nginx/default.conf

server_name your-site.com;

location /api/ {
  proxy_pass http://api.com;
}
```

3. Run compose command

```
docker-compose up
```

Then, site is opened at `localhost:${NGINX_PORT}/grader`