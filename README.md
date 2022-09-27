# Publish

- main / beta
- builds

```
uig-pages/
├─ build/
│  ├─ beta/
│  │  ├─ ci-applications/
│  │  │  ...
│  │  ├─ ci-web-components/
│  │  │  ...
│  ├─ feature/
│  │  ├─ UIG-xxx-abc/
│  │  │  ├─ ci-applications/
│  │  │  │  ├─ 4/
│  │  │  │  │   -> de 'dist' folder hieronder kopiëren 
│  │  │  ├─ ci-web-components/
│  │  │  │  ├─ 4/
│  │  │  │  │   -> de 'dist' folder hieronder kopiëren 
│  ├─ main/
│  │  ├─ ci-applications/
│  │  │  ├─ 1/
│  │  │  │   -> de 'dist' folder hieronder kopiëren 
│  │  ├─ ci-web-components/
│  │  │  ├─ 1/
│  │  │  │   -> de 'dist' folder hieronder kopiëren 
```

## GitHub Actions

### ci-web-components

- test
- publish the test results per build on uig-pages
- build
- [if main] release
- [if branch] publish branch storybook
- [if main] publish release version storybook + update reference to main storybook


# Monorepo



