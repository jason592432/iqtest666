-- D1 schema for iq-test.com.cn
-- 用法：wrangler d1 execute iqtest --remote --file=./schema.sql

CREATE TABLE IF NOT EXISTS scores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts INTEGER NOT NULL,
  date TEXT NOT NULL,
  test TEXT NOT NULL DEFAULT 'unknown',
  score INTEGER NOT NULL DEFAULT 0,
  label TEXT DEFAULT '',
  dur INTEGER DEFAULT 0,
  pct REAL DEFAULT 0,
  ver INTEGER DEFAULT 0,
  src TEXT DEFAULT '',
  ip TEXT DEFAULT '',
  location TEXT DEFAULT '',
  dimp TEXT DEFAULT NULL,
  wrong TEXT DEFAULT NULL
);
CREATE INDEX IF NOT EXISTS idx_scores_date ON scores(date);
CREATE INDEX IF NOT EXISTS idx_scores_ip ON scores(ip, ts);
CREATE INDEX IF NOT EXISTS idx_scores_test ON scores(test);

CREATE TABLE IF NOT EXISTS starts (
  date TEXT NOT NULL,
  test TEXT NOT NULL,
  n INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (date, test)
);

CREATE TABLE IF NOT EXISTS visits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts INTEGER NOT NULL,
  date TEXT NOT NULL,
  path TEXT DEFAULT '/',
  src TEXT DEFAULT '',
  country TEXT DEFAULT '',
  device TEXT DEFAULT 'desktop',
  vhash TEXT DEFAULT '',
  isnew INTEGER DEFAULT 0,
  vfirst INTEGER DEFAULT NULL
);
CREATE INDEX IF NOT EXISTS idx_visits_date ON visits(date);
CREATE INDEX IF NOT EXISTS idx_visits_vhash ON visits(vhash, ts);

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY,
  text TEXT NOT NULL,
  time TEXT NOT NULL,
  ts INTEGER NOT NULL
);
