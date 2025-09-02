# Logique Print

This package for print console log, warn, table, info, error and write sql to file.

[![License](https://img.shields.io/github/license/redis/node-redis.svg)](https://github.com/Logique-ID/logique-log/blob/master/LICENSE)

## Usage

### Basic Example

Typescript version

```typescript
import { createLog } from 'logique-log';

// by default flag log is active

createLog({
  title: "Users",
  message: "data users",
  type: "log",
});
```

### With Configuration

Sample configration with flag control, Typescript version :

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

Create log set off and sql query set to true, Typescript version :

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
