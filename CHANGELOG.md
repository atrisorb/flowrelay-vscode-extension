# Changelog

All notable changes to the Flow Relay VS Code extension.

## 1.0.14 – 2026-07-29

### Fixed
- Added a 30-second socket timeout to the extension's native Node HTTP client to prevent network hangs from freezing the extension host or sidebar panels.

## 1.0.13 – 2026-07-25

### Added
- `Flow Relay: Send Discord Message` can post the active project's latest release notes as a `.md` attachment.

### Fixed
- `Flow Relay: Generate Release Notes` now works: the command was contributed to the palette in 1.0.12 but never registered, so running it failed with "command not found". It asks for the output style and, when the project tracks code repositories, which repository to cover.

## 1.0.12 – 2026-07-24

### Added
- `Flow Relay: Generate Release Notes` command: turn the merged work of a project into release notes or a PR description, opened as a Markdown document. Costs 3 credits per run.
- `Flow Relay: Show Digests` command: browse the scheduled digests of the active project and open one as Markdown. Reading is free – digests are generated on the schedule set from the project page.
- `release_notes` joins the insight kinds returned by `Show Insights`.

## 1.0.11 – 2026-07-24

### Added
- `Flow Relay: Ask This Project` command: ask one question about the active project and read the answer as a Markdown document. Answers synchronously and cites the events it used. Costs 2 credits per question.

## 1.0.10 – 2026-07-22

### Added
- `incident_io` joins the source vocabulary (`SOURCES`, `SOURCE_NAMES`, `SOURCE_PROJECT_LABEL`): incident.io public incident events appear in the filter panel with incident types as the resource dimension and severities as priorities.

## 1.0.9 – 2026-07-20

### Added
- `vercel` joins the source vocabulary (`SOURCES`, `SOURCE_NAMES`, `SOURCE_PROJECT_LABEL`): Vercel deployment results appear in the filter panel with projects as the resource dimension.

## 1.0.8 – 2026-07-16

### Added
- `circleci` joins the source vocabulary (`SOURCES`, `SOURCE_NAMES`, `SOURCE_PROJECT_LABEL`): CircleCI workflow results appear in the filter panel with projects as the resource dimension.

## 1.0.7 – 2026-07-15

### Added
- `buildkite` joins the source vocabulary (`SOURCES`, `SOURCE_NAMES`, `SOURCE_PROJECT_LABEL`): Buildkite build results appear in the filter panel with pipelines as the resource dimension.

## 1.0.6 – 2026-07-10

### Added
- `gmail` and `asana` complete the source vocabulary.


## 1.0.5 – 2026-07-08

### Fixed
- Added `pagerduty` to the source vocabulary (`SOURCES`, `SOURCE_NAMES`, `SOURCE_PROJECT_LABEL`). It was added to the platform but never reached the extension, so PagerDuty was missing from the filter panel and its resources rendered without a proper label.

### Fixed
- Workspace sidebar labeled the no-project state as "Personal stream (no project)"; the personal stream is retired, so it now reads "Scope: No project selected".

## 1.0.4 – 2026-07-04

### Added
- `Flow Relay: Show Events` command – lists recent context events for the active project in a quick pick, with full detail view on selection. Closes the parity gap with the MCP server's `list_events` tool.

## 1.0.3 – 2026-07-03

### Added
- Figma region awareness in the filter panel. When the active project's processing region is not Global, Figma appears greyed out with an inline note explaining that Figma visual context requires the Global region (and who can change it). Selecting Figma on Global projects attaches rendered frame previews plus the indexed design scene to the generation, at a flat 1-credit surcharge.

## 1.0.2 – 2026-07-03

### Changed
- `showHandoffDocument` / `showInsightDocument` open the server-rendered `markdown` (canonical serializer, byte-identical to the dashboard copy button) with a local minimal fallback for pre-markdown servers.

## 1.0.1 – 2026-06-29

### Added
- **Send Discord Message** can now post a Flow Relay artifact directly: pick a channel, then choose to type a message or send the latest handoff, correlation, onboarding, or architecture insight for the active project. The artifact is rendered to the same Markdown as the dashboard copy button and delivered as a `.md` file attachment.

## 1.0.0 – 2026-06-28

### Changed
- Reworked the handoff/insight filter panel into a faithful, branded port of the Flow Relay web UI. Sources and per-source filters (resources, branches, event types, priorities) are now **selected from real options** fetched from `GET /api/v1/handoffs/filters` – no manual typing, so no typos or forgotten values. Branch selection is single-choice (radio) with the default branch flagged, matching the web app.
- Full-page panel layout that fills the editor tab, with a sticky action bar.
- Bundled the correct brand fonts (Geist Sans for body, Geist Mono for resource/branch labels, Rubik for the "Flow Relay" wordmark – 500 / 300 weights) and refreshed the mascot to the current design. Avorio (light) + Sera (dark) theming follows the editor theme.

## 0.9.0 – 2026-06-28

### Added
- First version of the visual filter panel for handoff and insight generation, plus per-source filter support end to end.

### Changed
- "Generate Handoff from Source..." renamed to "Generate Handoff with Filters...".
- Handoff and insight generation poll asynchronous jobs to completion.

### Fixed
- Removed a banned unicode arrow from a sidebar message.
- Removed the dead inline-handoff response path.
