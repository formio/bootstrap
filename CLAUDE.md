# @formio/bootstrap

## Identity

- **Path:** `packages/bootstrap`. **Published as:** `@formio/bootstrap` on npm (MIT).
- **OSS sync:** YES — `ossRepo: github.com/formio/bootstrap`, `srcPath: "."`. Everything in `src/` ships publicly on release.
- **Module system:** TypeScript, dual CJS + ESM build (`tsconfig.cjs.json` / `tsconfig.mjs.json`), UMD bundles in `dist/`. **Lint:** TSLint (deprecated), not ESLint.
- **Era:** mature, near-static template pack. `.ts` files are thin barrels; the substance is ~220 precompiled `.ejs` markup files.
- **Purpose:** the **template pack** (markup only) that `@formio/js` uses to render forms under Bootstrap 3 / 4 / 5. It supplies HTML; the renderer owns all behavior.

## Floor — immutable musts

- **A `.ejs` change is almost never done in one tree.** `src/templates/{bootstrap3,bootstrap4,bootstrap5}/` are three hand-maintained copies. Mirror the edit across all three — swapping `sr-only` (BS3/BS4) ↔ `visually-hidden` (BS5), and noting BS3 lacks some anchors and is partially frozen. See [`bootstrap/subframework-parity-01`](../../docs/gotchas/bootstrap.md#subframework-parity-01--bootstrap345-are-three-hand-maintained-copies-the-intra-package-axis).
- **Don't delete a hidden announcement span or rename a `ref="..."`.** The renderer writes screen-reader announcements into those spans by `ref` name, with optional chaining — so a deletion or rename silently no-ops. The `ref`-name contract itself is seam invariant 1 ([template-markup-contract](../../docs/cross-cutting/template-markup-contract.md)); the bootstrap anchors are [`bootstrap/announce-anchors-01`](../../docs/gotchas/bootstrap.md#announce-anchors-01--the-hidden-announcement-spans-are-renderer-driven-dont-delete-or-rename-them) (marker `G-BS01`).
- **Use lodash-template delimiters, never stock EJS.** `{{ }}` interpolate, `{% %}` evaluate, `{{{ }}}` raw HTML, context var `ctx`. `<% %>` produces literal text. See [`bootstrap/ejs-precompile-delimiters-01`](../../docs/gotchas/bootstrap.md#ejs-precompile-delimiters-01--templates-use-lodash-template-delimiters-not-stock-ejs).
- **A new template is invisible until imported in `templates/<fw>/index.ts`** — registration is by explicit import, not filesystem scan. And the renderer may look it up by a string-constructed name (e.g. `wizardHeader<Setting>`). See [`bootstrap/template-name-and-registration-01`](../../docs/gotchas/bootstrap.md#template-name-and-registration-01--the-directory-name-is-the-renderers-lookup-key-and-the-barrel-must-import-it).
- **No secrets / internal-only / license-gated markup in `src/`** — it ships publicly. `GOTCHA(G-NNN)` markers in templates stay numeric (no topic phrases); in `.ejs` use `{% /* GOTCHA(G-NNN) */ %}`.

## Ceiling — emerging patterns

- **Pattern: a component is a directory of `form.ejs` (+ optional `html.ejs`) plus a 3-line `index.ts` barrel that default-exports `{ form, html }`. Example:** [`src/templates/bootstrap5/input/index.ts`](./src/templates/bootstrap5/input/index.ts).
- **Pattern: a screen-reader announcement anchor is a hidden span with a `ref` + `aria-live`, written into by the renderer. Example:** [`src/templates/bootstrap5/input/form.ejs:68`](./src/templates/bootstrap5/input/form.ejs) (`ref="announceMessage"`, carries marker `G-BS01`).

## Blast radius

**5 dependents, tier: medium** (headline consumer `@formio/js`, which also deep-imports `@formio/bootstrap/components`). See [`/docs/dependencies/bootstrap.md`](../../docs/dependencies/bootstrap.md).

## Test & build

```sh
pnpm -F @formio/bootstrap build         # rm -rf lib; tsc cjs+mjs; gulp templates (precompile .ejs); webpack; libpackage.js
pnpm -F @formio/bootstrap lint          # tslint -p .
pnpm -F @formio/bootstrap check-types   # tsc --noEmit
```

**There is no test suite here** — `src/test.spec.ts` is a placeholder and there is no `test` script. "Green" locally = `build` + `lint` + `check-types`. Behavioral verification of a markup change happens **downstream in `@formio/js`** (renderer integration tests):

```sh
pnpm -F @formio/js test                 # exercises this package's markup
```

See [`bootstrap/no-test-suite-01`](../../docs/gotchas/bootstrap.md#no-test-suite-01--there-is-no-test-suite-verify-in-formiojs).

## Hot paths & gotchas

See [`/docs/gotchas/bootstrap.md`](../../docs/gotchas/bootstrap.md). Entries: `bootstrap/subframework-parity-01`, `bootstrap/announce-anchors-01` (G-BS01), `bootstrap/template-name-and-registration-01`, `bootstrap/wizard-header-variants-01` (G-BS02), `bootstrap/ejs-precompile-delimiters-01`, `bootstrap/no-test-suite-01`.

## Cross-cutting triggers

- **Editing any `*.ejs` (markup, `ref` names, element ids, `aria-*` wiring, shared id formats like the fieldset legend `l-<id>-legend`)** → read [`/docs/cross-cutting/template-markup-contract.md`](../../docs/cross-cutting/template-markup-contract.md) first. The same markup is reimplemented in `@formio/uswds` and `@formio/standard-template`, and read back by `@formio/js`; a one-sided change is a silent a11y/behavior regression (FIO-11126, FIO-10942).
- **Editing a `wizardHeader*` / `wizardNav` template** → check what `wizard/form.ejs` already renders around it before adding a landmark, `id`, or progressbar. See [`bootstrap/wizard-header-variants-01`](../../docs/gotchas/bootstrap.md#wizard-header-variants-01--header-plus-nav-both-render-duplicate-landmarks-are-the-recurring-bug) (FIO-11049, FIO-11511).
- **Adding/renaming an `exports` sub-path (`./components`, `./bootstrap5`, …)** → `@formio/js` deep-imports `@formio/bootstrap/components`; a rename breaks it at import resolution. See [dependencies](../../docs/dependencies/bootstrap.md#deep-coupling-inventory).
- **Any publishable change** → add a changeset (`@formio/bootstrap`, plus any sibling template pack you also touched — one entry per published package). **`major` bump** → coordinate the OSS release.

## References

- Repo-wide: [`/CLAUDE.md`](../../CLAUDE.md), [`/STANDARDS.md`](../../STANDARDS.md)
- Architecture: [`/docs/architecture/bootstrap.md`](../../docs/architecture/bootstrap.md)
- Dependencies: [`/docs/dependencies/bootstrap.md`](../../docs/dependencies/bootstrap.md)
- Gotchas: [`/docs/gotchas/bootstrap.md`](../../docs/gotchas/bootstrap.md)
- Seam: [`/docs/cross-cutting/template-markup-contract.md`](../../docs/cross-cutting/template-markup-contract.md)
- Downstream consumer: [`packages/formio.js/CLAUDE.md`](../formio.js/CLAUDE.md)
