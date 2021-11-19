# Kubernetes

## `kubectl`

### Port Forwarding

```bash
kubectl -n {{namespace}} port-forward service/{{service}} 9000:9000
```

### Connect to POD

```bash
kubectl exec --stdin --tty -n ${namespace} ${pod} -- sh
```

### Connect to Postgres from POD

```bash
apt update
apt install postgresql-client
echo $TYPEORM_PASSWORD

psql -d ${database} -U ${user} -h ${host}
```
