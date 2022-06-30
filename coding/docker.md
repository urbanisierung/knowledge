# Docker

## Useful commands

Build Image

```bash
docker build . -t $TAG

# no cache: --no-cache
# build args (like env vars): --build-arg NPM_TOKEN=$NPM_TOKEN
```

Run Image

```bash
# --net=host publishes host network to container, use it only for testing!
docker run --name $NAME -p 8080:8080 --net=host -d $TAG

# stop it with
docker stop $NAME
```

Monitoring

```bash
# images
docker images

# running container
docker ps

# logs
docker logs -f --tail 100 $NAME

# watch running instances
watch docker ps
```

Clean up (more [here](https://renehernandez.io/snippets/cleaning-local-docker-cache/))

```bash
# Removing unused containers
docker ps --filter status=exited --filter status=dead -q
docker rm $(docker ps --filter=status=exited --filter=status=dead -q)

# Removing dangling images
docker images --filter dangling=true -q
docker rmi $(docker images --filter dangling=true -q)
```
