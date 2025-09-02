# Logique Log

This package for print console log, warn, table, info, error and write sql to file.

[![made-with-nodejs](https://img.shields.io/badge/Made%20with-Nodejs-1f425f.svg)](https://nodejs.org)
[![Create](https://img.shields.io/badge/Created%20by-Logique-1f425f.svg)](https://www.logique.co.id/)
[![GitHub release](https://img.shields.io/github/release/Logique-ID/logique-log.svg)](https://github.com/Logique-ID/logique-log/releases)
[![GitHub issues](https://img.shields.io/github/issues/Logique-ID/logique-log.svg)](https://github.com/Logique-ID/logique-log/issues/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/Logique-ID/logique-log.svg)](https://github.com/Logique-ID/logique-log/pulls/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![License](https://img.shields.io/github/license/redis/node-redis.svg)](https://github.com/Logique-ID/logique-log/blob/master/LICENSE)

## Usage

### Basic Example Typescript Version

```typescript
import { createLog } from 'logique-log';

// by default flag log is active

createLog({
  title: "Users",
  message: "data users",
  type: "log",
});
```

### With Configuration Typescript version

Sample configration with flag control :

```typescript
import { createLog, createLogConfig, writeSqlQuery } 'logique-log';

// set in top level by env or static value default 1 or true is active
createLogConfig({
  logging: {
    enabled: 1,
    enableSqlQuery: 0,
  },
});

createLog({
  title: "Users",
  message: "data users",
  type: "log",
});
```

Create log set off and sql query set to true :

```typescript
import { createLog, createLogConfig, writeSqlQuery } 'logique-log';

// set in top level by env or static value default 1 or true is active
createLogConfig({
  logging: {
    enabled: 0,
    enableSqlQuery: 1,
  },
});

// this log not print in terminal or stdout
createLog({
  title: "Users",
  message: "data users",
  type: "log",
});

writeSqlQuery("query.sql", "SELECT * FROM users");
```

### Basic Example Commonjs Version

```javascript
const { createLog } = require('logique-log')
// by default flag log is active
createLog({
  message: 'info',
  type: 'info',
})
```

### With Configuration Commonjs version

Sample configration with flag control :

```javascript
const { createLog, createLogConfig, writeSqlQuery } = require('logique-log')
// set in top level by env or static value default 1 or true is active
createLogConfig({
  logging: {
    enabled: 1,
    enableSqlQuery: 0,
  },
});

createLog({
  title: "Users",
  message: "data users",
  type: "log",
});
```

Create log set off and sql query set to true :

```typescript
const { createLog, createLogConfig, writeSqlQuery } = require('logique-log')

// set in top level by env or static value default 1 or true is active
createLogConfig({
  logging: {
    enabled: 0,
    enableSqlQuery: 1,
  },
});

// this log not print in terminal or stdout
createLog({
  title: "Users",
  message: "data users",
  type: "log",
});

writeSqlQuery("query.sql", "SELECT * FROM users");
```

### Type

List of type log

| Type                    | When                                                                               | Parameter                                                 |
| ----------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `log`                   | print console.log, title is optional                                               | `{ title: "title", message:"data to print"}`                                            |
| `info`                  | print console.log, title is optional                                               |`{ title: "title", message:"data to print"}`                                        |
| `warn`                  | print console.log, title is optional                                               | `{ title: "title", message:"data to print"}`                                          |
| `table`                 | print console.log, title is optional                                               | `{ message:"array of object"}`                                         |
| `error`                 | print console.log, title is optional                                               | `{ title: "title", message:"data to print"}`                                            |

## Contributing

[![Contributors](https://contrib.rocks/image?repo=Logique-ID/logique-log)](https://github.com/Logique-ID/logique-log/graphs/contributors)

## License

This repository is licensed under the "MIT" license. See [LICENSE](https://github.com/Logique-ID/logique-log/blob/master/LICENSE).
