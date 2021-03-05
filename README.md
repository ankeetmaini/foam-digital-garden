# foam-digital-garden-template

Create your notes and publish them digital-garden style effortlessely.

## adding notes

- start creating notes in the `content` directory
- read Foam's [documentation](https://foambubble.github.io/foam/) for backlinks and daily notes commands

## publishing using Github Action

- generate [personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token#creating-a-token) for the repo
- set it as a [secret](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) with name `ACCESS_TOKEN`

  > after these steps the site will be deployed automatically to Github pages on each push/commit on `main`

  If you want to change the branch name, change it [here](./.github/workflows/publish.yaml)

## code syntax highlighting

### theme

- this template uses `okaidia` as the default prism theme
- if you wish to change it, please update [this line](https://github.com/ankeetmaini/foam-digital-garden/blob/main/src/gatsby-theme-garden/components/mdx-components/CodeBlock.js#L4)

### adding language syntaxes

- by default it covers most of the languages but if you want to add it
- import the prism modules [here as shown](https://github.com/ankeetmaini/foam-digital-garden/blob/main/src/gatsby-theme-garden/components/mdx-components/CodeBlock.js#L7)

## credits

- Gatsby starter for Digital Garden - https://github.com/mathieudutour/gatsby-starter-digital-garden
- Foam official template - https://github.com/foambubble/foam-template
