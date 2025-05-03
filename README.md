# easy-process-env

A lightweight TypeScript wrapper around [`dotenv`](https://www.npmjs.com/package/dotenv) for safely accessing and converting environment variables in Node.js.

## 📦 Installation

```bash
npm install easy-process-env
```

## 🚀 Usage

```ts
import EasyEnvironment from "easy-process-env";

// Optionally pass DotenvConfigOptions (e.g., a custom path)
const env = new EasyEnvironment();

// Get string value or undefined
const dbHost = env.env("DB_HOST");

// Get string value with default
const port = env.env("some_string_value", "some_default_string_value");

// Get boolean value
const debug = env.envBool("DEBUG_MODE", false);

// Get integer value
const maxUsers = env.envInt("MAX_USERS", 100);

// Get float value
const timeout = env.envFloat("TIMEOUT_SECONDS", 1.5);
```

## 🧠 API

### `constructor(options?: DotenvConfigOptions)`

Loads your `.env` file using `dotenv.config()`. If the file is missing or invalid, it throws an error.

### `env(key: string, defaultValue?: any): string | undefined`

Returns the raw environment variable or a fallback if not defined.

### `envBool(key: string, defaultValue = false): boolean`

Returns `true` for `"1"` or `"true"` (case-insensitive), otherwise `false`.

### `envInt(key: string, defaultValue?: number): number | undefined`

Parses the variable as an integer, returns default if not a number.

### `envFloat(key: string, defaultValue?: number): number | undefined`

Parses the variable as a float, returns default if not a number.

## 📁 Example `.env`

```
PORT=3000
DEBUG_MODE=true
MAX_USERS=50
TIMEOUT_SECONDS=2.5
```
