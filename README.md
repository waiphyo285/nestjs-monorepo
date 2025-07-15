# NestJS Monorepo Manual Setup

This repository demonstrates how to manually set up a NestJS monorepo without using the deprecated `--monorepo` CLI flag.

---

## 1. Create Workspace Folder

```bash
mkdir nestjs-monorepo
cd nestjs-monorepo
npm init -y
```

---

## 2. Install Nest CLI

You can install Nest CLI globally (recommended):

```bash
npm i -g @nestjs/cli
```

Or locally as a dev dependency:

```bash
npm i -D @nestjs/cli
```

---

## 3. Create Folder Structure

```bash
mkdir apps libs
```

---

## 4. Generate Apps Manually

Generate apps inside the `apps/` folder:

```bash
nest new apps/neo
nest new apps/vita
nest new apps/gateway
```

- When prompted during setup, choose **No** for independent Git repository and installation.
- After generating, **delete** the `package.json`, `node_modules/`, and `tsconfig.json` inside each app folder to unify dependencies under the root.

---

## 5. Generate Libraries Manually

Generate libs inside the `libs/` folder:

```bash
nest g lib infrastructure/abstracts
nest g lib infrastructure/databases
nest g lib framework/decorators
nest g lib presentation/templates
```

---

## 6. Configure `nest-cli.json`

Create or update `nest-cli.json` in the root:

```json
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "apps",
  "monorepo": true,
  "compilerOptions": {
    "tsConfigPath": "tsconfig.json",
    "webpack": false
  },
  "projects": {
    "neo": {
      "type": "application",
      "root": "apps/neo",
      "entryFile": "main",
      "sourceRoot": "apps/neo/src"
    },
    "vita": {
      "type": "application",
      "root": "apps/vita",
      "entryFile": "main",
      "sourceRoot": "apps/vita/src"
    },
    "gateway": {
      "type": "application",
      "root": "apps/gateway",
      "entryFile": "main",
      "sourceRoot": "apps/gateway/src"
    }
  }
}
```

---

## 7. Configure `tsconfig.json` and `tsconfig.base.json`

Create a root `tsconfig.json`:

```json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@infrastructure/*": ["libs/infrastructure/*/src"],
      "@framework/*": ["libs/framework/*/src"],
      "@presentation/*": ["libs/presentation/*/src"]
    }
  }
}
```

Create a `tsconfig.base.json`:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2017",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "rootDir": ".",
    "outDir": "./dist",
    "resolveJsonModule": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "exclude": ["node_modules", "dist"]
}
```

---

## 8. Run a Specific App

Run apps using Nest CLI:

```bash
nest start neo
nest start vita
```

Or via npm scripts (add to `package.json`):

```json
"scripts": {
  "start:neo": "nest start neo",
  "start:vita": "nest start vita"
}
```

Run with:

```bash
npm run start:neo
```

---

## Additional Tips

- Use path aliases defined in `tsconfig.json` when importing libs in your apps.
- Build apps with `nest build neo`.
- Consider using PM2 or Docker for production deployments.
- Clean and rebuild when switching branches or dependencies:

```bash
rm -rf dist node_modules
npm install
npm run build:all
```
