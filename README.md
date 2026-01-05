## SCOREBOARD SUPPORT

### 環境

マインクラフト統合版、ScriptApi で使用できるモジュールです。

---

## 注意点

## manifest.json にある entry 欄には、自分のファイル名ではなく、"entry": "scripts/dist/bundle.js" となるように書いてください

### 実行方法

- 初めての場合 <br>

  > npm install https://github.com/nato-git/ScoreboardSupport-in-scriptapi.git

  > npm install --save-dev esbuild

  > import \* as score from 'scoreboard-support';

  > scripts ファイル内に dist ファイルを作成

  package.json に次のように記入

```
  {
    vvvvv
    "scripts": {
      "build": "esbuild scripts/(あなたのjsファイル名) --bundle --outfile=scripts/dist/bundle.js --format=esm --external:@minecraft/server --external:@minecraft/server-ui"
    },
    ^^^^^

    "dependencies": {
      "@minecraft/server": "^2.4.0",
      "scoreboard-support": "git+https://github.com/nato-git/ScoreboardSupport-in-scriptapi.git"
    },

    "devDependencies": {
      "esbuild": "^0.27.2"
    }
  }
```

- アップデートをする場合 <br>

  > npm update scoreboard-support

- 終了後
  > npm run build

---

### 使用例

```
score.add_score('apple', player, 5);
//player に apple を 5 加算

score.get_score('banana', player);
//player の banana スコアの数値を取得
```

---

### 内容

- スコアボードの値の取得 get_score
- 値の増加 add_score
- 値の設定 set_score
- オブジェクトの作成 create_score

---

### 更新日

2026/1/6
