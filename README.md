# jscratch

JavaScript風のプログラミング言語を、[Scratch](https://scratch.mit.edu/)上で動作させるツールです。
処理が遅すぎて、計算量の多いプログラムに対しては使いものになりませんが、せっかくなので公開します。

## 実行方法

### サンプル

1. [こちらのディレクトリ](https://github.com/feather16/jscratch/blob/main/jscratch/asm/minecraft.txt)内のファイルを予めダウンロードしておきます。
2. [こちらのScratchプロジェクト](https://scratch.mit.edu/projects/872911348/)の中身を開き、リスト「assembly_code」に読み込んでください。

### プログラムを自作する場合

[こちら](https://github.com/feather16/jscratch/tree/main/jscratch/src)を参考にしてください。

## ブラウザ上でのコンパイル

[こちら](https://feather16.github.io/jscratch)にアクセスしてください。

## 開発者向け

### ローカル環境での実行

文法ファイルのコンパイル
```
npx antlr4ts JScratch.g4 -o src/antlr
```

#### コンソールでテストプログラムを実行

コンパイル
```
npx tsc -p test/tsconfig.json
```

実行
```
node test.js
```

#### ブラウザで実行

フロントエンド向けコンパイル
```
npx webpack
```

`http-server`の起動
```
npx http-server
```
