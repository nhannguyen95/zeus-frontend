Create a new key on laptop A:
```bash
gpg --full-generate-key
```

Link the new key to the repo on laptop A:
```bash
git-crypt init
git-crypt add-gpg-user email@example.com
```