# Validation Strategy

## Principle

UNMEIでは「当たった事例を集める」ことよりも、**別の事例でも再現する構造を探すこと**を重視しています。

## Loop

```text
仮説
→ 実例で確認
→ 不一致を記録
→ 原因を分解
→ 判断構造を修正
→ 別事例 / 反例で再検証
```

## Examples of issues found through testing

### 1. Monthly evidence mixing

別の月で成立した関係が、他の月の説明に混ざる問題が発生。

**対応:** 月単位の provenance / frame を持たせ、時点ごとの根拠を分離。

### 2. Timezone boundary

節入り時刻の UTC+8 wall-clock を JST のように扱うと、日付跨ぎ付近で誤判定が起こり得ることを確認。

**対応:** timezone 解釈を一箇所へ集約し、JST exact boundary へ正規化。

### 3. LLM bookkeeping overload

AIに回答・根拠ID・表示値・期間情報を同時に生成させると、整合性エラーが増えた。

**対応:** deterministic に生成できる情報はサーバー側へ戻す。

## What is not disclosed

- 実際の命理ルール
- どの条件を優先するか
- 衝突時の裁定ロジック
- private case corpus
