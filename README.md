# Base Node Starter

Base Node Starter File with Babel, Leapfrog Eslint and Prettier Configuration

## Generate Changelog

Generate Changelog Only with following command:

```bash
$ NEXT=APP_NEXT_VERSION TOKEN=YOUR_GITHUB_TOKEN yarn changelog

E.g:
$ NEXT=v1.0.1 TOKEN=4545c0557b37331454343434 yarn changelog
```

## Release

Generate changelog and publish a new tag using the following command:

```bash
$ NEXT=APP_NEXT_VERSION TOKEN=YOUR_GITHUB_TOKEN yarn release

E.g:
$ NEXT=v1.0.1 TOKEN=4545c0557b37331454343434 yarn release
```

**Note**: This requires [`github_changelog_generator`](https://github.com/github-changelog-generator/github-changelog-generator) to be installed.

Don't have github token, generate one here: [`generate_github_token`](https://github.com/settings/tokens/new?scopes=repo,read:user,user:email&description=base-node-starter)
