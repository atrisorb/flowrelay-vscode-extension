# Flow Relay VS Code Extension

Flow Relay for VS Code brings async handoff generation and multi-tenant project context directly into your editor.

- Extension id: flowrelay.flowrelay
- Current version: 1.0.14

## Key Features

- Workspace Context sidebar panel with tenant-aware status.
- Project-scoped workflows. (Note: Handoffs and insights generation require a project context and are processed asynchronously with automated polling).
- Project context selector command.
- Q&A capability (`Flow Relay: Ask This Project`) to ask questions grounded in your project's code, baselines and recent activity.
- Handoff generation from all connected sources, or via a branded visual filter panel that mirrors the Flow Relay web UI – select sources and per-source filters (resources, branches, event types, priorities) from real options, with no manual typing. The same panel drives insight generation.
- Figma visual context: selecting Figma in the filter panel attaches rendered frame previews plus the indexed design scene (layout, texts, prototype flows) to the generation, at a flat 1-credit surcharge. Requires the project's processing region to be Global – on other regions Figma shows as unavailable with an inline explanation.
- Release notes generation (`Flow Relay: Generate Release Notes`) – turns the active project's merged work into release notes, or a PR description, opened as a Markdown document.
- Scheduled digests (`Flow Relay: Show Digests`) – browse the recurring activity digests of the active project and open one as Markdown. Reading is free; the schedule itself is configured on the project page.
- Handoffs list and quick open from the sidebar.
- Integrations list in active scope.
- Untracked resources detection – surfaces event-producing repositories, channels, and boards not scoped to any project, with quick-add to assign them.
- Discord channel listing and message sending – type a message, or send the active project's latest handoff / correlation / onboarding / architecture / release-notes artifact as a `.md` attachment.

## Multi-Tenant Scope Behavior

The extension operates within the context of a project:

- Project scope (personal project or organization project) is required for handoff and insight operations.
- In organization projects, the UI adapts by role and context (owner, admin, member states).

## Installation

Install from one of these channels:

- VS Code Marketplace: https://marketplace.visualstudio.com/items?itemName=flowrelay.flowrelay
- OpenVSX: https://open-vsx.org/extension/flowrelay/flowrelay
- Manual VSIX from Flow Relay downloads page.

## Setup

1. Open Command Palette.
2. Run: Flow Relay: Set API Key
3. Enter your API key (format: fr\_...)
4. Optional: run Flow Relay: Select Project Context to switch to a project scope

Default API base URL:

- https://www.flowrelay.it

You can override it in settings with flowrelay.apiBaseUrl.

## Commands

- Flow Relay: Set API Key
- Flow Relay: Select Project Context
- Flow Relay: Generate Handoff
- Flow Relay: Generate Handoff with Filters...
- Flow Relay: Show Handoffs
- Flow Relay: Show Last Handoff
- Flow Relay: Show Integrations
- Flow Relay: List Discord Channels
- Flow Relay: Send Discord Message
- Flow Relay: Ask This Project
- Flow Relay: Generate Project Insight...
- Flow Relay: Generate Release Notes
- Flow Relay: Show Insights
- Flow Relay: Show Digests
- Flow Relay: Show Untracked Resources
- Flow Relay: Show Events
- Flow Relay: Refresh

## Development

From this folder:

```bash
npm install
npm run build
npm run package
```

## Troubleshooting

- If prompts show missing API key, run Flow Relay: Set API Key again.
- If no project data appears, run Flow Relay: Select Project Context and choose scope.
- If business workspace shows no accessible projects, verify team assignment and role in Flow Relay.

## Related Docs

- Documentation & Platform: https://www.flowrelay.it

