# Mono repo for SCEE's websites

Why a Mono Repo? Main because the LLMs cans see the design and logical changes in one app and implement it into the others, which removing errors, and component reuse is another main factor for going this route (yet we have not taken the time to do so). The app is build totally on `Vercel` stack which is Nextjs, Turborepo and deployed on Vercel. With plans to use Supabase for upcoming backend needs and requirements, as it is a simple one stop backend solution.

## Projects

`apps/web` [`sceeaot.vercel.app`](sceeaot.vercel.app) - The main website for our student chapter hosting the about our student chapter, team members and our events.

`apps/iotricity` [`iotricity.vercel.app`](iotricity.vercel.app) - Scee's flagship events webiste.

`apps/links` [`sceeaot-links.vercel.app`](sceeaot-links.vercel.app) - Linktree sucks so we made our own and it is fast.

`packages/eslint-config` - All `eslint` related configurations for the whole repo (needs to be configured).

`packages/typescript-config` - All `typescript` related configurations for the whole repo (needs to be configured).

`packages/ui` - All components and styling for all the apps in this repository (needs to be configured).

## Setup

First install git and setup node in your machine, and pnpm package manager for this project. If thats done you can get started locally.

Fork the repository and clone it.

```
git clone https://github.com/iei-scee-aot/sceeaot-web.git
cd sceeaot-web
```

Make sure that you have pnpm **package manager** installed and then install all the packages and run the apps to see if it working.

```
pnpm install
pnpm run dev
```

You can also lint and build all the apps at once.

```
pnpm run lint
pnpm run build
```

## Contributing

If you are member of SCEE you are free to contribute to the project. While coding keep sure to follow the coding practices.

- if you want to work on a feature or bug which is independent of the current plan, raise an issue and describe it well.
- always create new branch while working on features(`feat/`), updates(`update/`), and bug-fixes(`fix/`) and the give a PR to the main branch.
- use proper version control when face with issues in the current version/branch.
- always link and build the app locally, if you find any issue fix it and then give the PR.

## License

It is open source with MIT License, so use it accordingly.
