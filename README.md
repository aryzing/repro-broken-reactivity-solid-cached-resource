# Reproduction - broken reactivity solid-cached-resource

```bash
pnpm i && pnpm dev
```

There are three components: One, Two, and Maybe. The resource is set to `{ refetchOnMount: true }`. The Maybe component intermitently mounts and unmounts triggering a new fetch to the "API". However, components One and Two do not display the updated values.
# repro-broken-reactivity-solid-cached-resource
