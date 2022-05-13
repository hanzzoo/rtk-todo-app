
# next-boilerpalte-project
next.js用のボイラープレートプロジェクト

## branch
- [master (このREADME記載のベーステンプレート)](https://github.com/hanzzoo/next-boilerpalte-project)
- [redux-toolkit-template(redux-toolkitを含めたテンプレート)](https://github.com/hanzzoo/next-boilerpalte-project/tree/redux-toolkit-template)

## 環境
- Next.js `12.1.6`
- Node.js `16.10.0`
- yarn `1.22.18`

## npm scripts
|  コマンド  |  内容  |  備考  |
| ---- | ---- |---- |
|  `yarn dev`  |  development modeでアプリを実行  |　|
|  `yarn build`  |  アプリをビルドする  | |
|  `yarn start`  |  production modeでアプリをビルドする  | 前提として`yarn build`でproduction用に最適化されたファイルが存在している必要がある |
|  `yarn lint`  |  コードにes-lintのcheckを実行する  | git hookでcommit時に実行される |
|  `yarn lint:fix`  |  スタイル違反のコードに対する警告をes-lintのルールに修正する  | |
|  `yarn format`  |  コードがprettierのルールに乗っ取っているかcheckを実行する  | |
|  `yarn format:fix`  |  コードをprettierのルール乗っ取って整形する  |　git hookでcommit時に実行される |
|  `yarn test`  |  テストコードを実行する  |　テストコードは`tests`配下にjestで記載する |
|  `yarn test:ci`  |  CIでテストコードを実行する  |　テストコードは`tests`配下にjestで記載する |