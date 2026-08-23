# Architecture

## Goal

UNMEIでは、計算・判断・説明を一つのLLM処理にまとめません。

```text
Birth Data
  ↓
Four Pillars Calculation
  ↓
Judgment Layers
  ↓
Evidence / Decision Output
  ↓
LLM Explanation
```

## Why separate them?

LLMは自然言語の説明には強い一方、同じ入力に対して完全に同じ計算や細かな境界処理を保証する用途には向きません。

そのため、再現性が必要な領域を deterministic code に寄せ、AIは最終結果を説明する役割に限定します。

## Phase isolation

各Phaseは担当範囲を持ちます。

- 前Phaseの決定を後Phaseが再計算しない
- 後Phaseは前Phaseの出力を入力として扱う
- 問題が起きた場合に責任箇所を特定しやすくする
- 新しい規則追加による回帰影響を限定する

この公開リポジトリでは、具体的な命理条件・裁定順序・solver実装は非公開です。
