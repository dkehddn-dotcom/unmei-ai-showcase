# Public / Private Boundary

このファイルは、面接用Public Repositoryに何を出し、何を出さないかを整理するためのものです。

## Public — 公開してよい

- README / プロジェクト概要
- 使用技術
- 高レベルのアーキテクチャ
- Phaseが分かれている事実
- 現在の進捗
- UIスクリーンショット
- 簡略化した型・interface
- 実装方針を示すサンプルコード
- 一般化したテスト例
- 検証プロセス
- 実際に発見した技術的失敗の一般化した説明
- プロダクトの公開済み/予定機能

## Private — 公開しない

### Judgment IP
- `docs/judgment/*` の内部contract
- `FORCE_JUDGMENT_CONTRACT*`
- `src/lib/judgment/core/**` の実装詳細
- Phase 1 / 2 / 3A / 3B の実際の判定条件
- relation arbitration / solver の内部ルール
- 強弱・従格・大運統合の具体ルール
- 数値threshold / priority / conflict resolution table

### Research
- private case corpus
- 文献から抽出した未公開rule候補
- 採用前の研究メモ
- 競争優位になり得る整理資料

### AI instructions
- `AGENTS.md`
- `CLAUDE.md`
- system prompt
- internal Codex instruction
- hidden evaluation prompt

### Secrets / user data
- `.env*`
- API key
- database URL
- payment secret
- auth secret
- production log
- birth data / consultation records
- personal local paths / emails

## Important

Private repoをそのままPublicへ変更しないこと。

削除済みファイルでもGit historyに残る可能性があるため、公開版は **新しいフォルダ + 新しいGit履歴** で作成する。
