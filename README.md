# Secrets Management

This guide covers how to manage encrypted secrets using `git-crypt` and `GPG`.

## 💻 Setup on Laptop A

### 1. Prepare GPG Key
Create a new key:
```bash
gpg --full-generate-key
```

Or, list existing keys:
```bash
gpg --list-secret-keys --keyid-format=long
```

### 2. Link Key to Repository
```bash
git-crypt init
git-crypt add-gpg-user email@example.com
```

### 3. Export Private Key
```bash
gpg --export-secret-keys -a email@example.com > gpg-private-key.asc
```

> [!IMPORTANT]
> **Keep the private key and passphrase used when creating the key safe.**

---

## 💻 Setup on Laptop B

### 1. Import Private Key
```bash
gpg --import gpg-private-key.asc
```

### 2. Trust the Key
```bash
gpg --edit-key email@example.com
```

### 3. Decrypt Secrets
```bash
git-crypt unlock
```