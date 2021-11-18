# Screen

see also [here](https://linuxize.com/post/how-to-use-linux-screen/)

```bash
# new session
screen -S session_name

# list sessions
screen -ls

# re-attach
screen -r

# kill detached session
screen -X -S ${name/id} kill
```

Useful shortcuts:

- `ctrl`+`a` and `c`: create new window
- `ctrl`+`a` and `ctrl`+`d`: dettach
