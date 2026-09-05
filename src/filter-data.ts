/**
 * @license
 * Flow Relay Filter Vocabulary
 * Copyright (c) 2026 Adriano Sorbello (atrisorb) <https://github.com/atrisorb>
 * Licensed under GNU Affero General Public License v3.0 or later (AGPL-3.0-or-later)
 */

// Canonical source vocabulary.
export const SOURCES = [
  'github', 'slack', 'discord', 'linear', 'notion', 'jira', 'gitlab', 'bitbucket',
  'azure_devops', 'figma', 'confluence', 'microsoft_outlook', 'microsoft_teams',
  'sentry', 'datadog', 'pagerduty', 'asana', 'gmail', 'buildkite', 'circleci', 'vercel',
  'incident_io', 'netlify', 'render', 'railway', 'cloudflare_pages',
  'clickup', 'monday_com', 'shortcut', 'intercom', 'zendesk', 'snyk',
  'fireflies', 'zoom', 'grafana', 'google_calendar', 'google_drive',
] as const;

export const SOURCE_NAMES: Record<string, string> = {
  github: 'GitHub', slack: 'Slack', discord: 'Discord', linear: 'Linear',
  notion: 'Notion', jira: 'Jira', gitlab: 'GitLab', bitbucket: 'Bitbucket',
  azure_devops: 'Azure DevOps', figma: 'Figma', confluence: 'Confluence',
  microsoft_outlook: 'Outlook', microsoft_teams: 'Microsoft Teams',
  sentry: 'Sentry', datadog: 'Datadog', pagerduty: 'PagerDuty', asana: 'Asana',
  gmail: 'Gmail', buildkite: 'Buildkite', circleci: 'CircleCI', vercel: 'Vercel',
  incident_io: 'incident.io', netlify: 'Netlify', render: 'Render', railway: 'Railway',
  cloudflare_pages: 'Cloudflare Pages', clickup: 'ClickUp', monday_com: 'monday.com',
  shortcut: 'Shortcut', intercom: 'Intercom', zendesk: 'Zendesk', snyk: 'Snyk',
  fireflies: 'Fireflies', zoom: 'Zoom', grafana: 'Grafana',
  google_calendar: 'Google Calendar', google_drive: 'Google Drive',
};

export const SOURCE_PROJECT_LABEL: Record<string, string> = {
  azure_devops: 'Repositories', github: 'Repositories', gitlab: 'Projects',
  bitbucket: 'Repositories', slack: 'Channels', discord: 'Channels', linear: 'Teams',
  jira: 'Projects', notion: 'Workspace', figma: 'Files', confluence: 'Spaces',
  microsoft_outlook: 'Senders', microsoft_teams: 'Chats', sentry: 'Projects',
  datadog: 'Monitors', pagerduty: 'Services', asana: 'Projects', gmail: 'Senders',
  buildkite: 'Pipelines', circleci: 'Projects', vercel: 'Projects',
  incident_io: 'Incident types', netlify: 'Sites', render: 'Services',
  railway: 'Projects', cloudflare_pages: 'Projects', clickup: 'Spaces',
  monday_com: 'Boards', shortcut: 'Teams', intercom: 'Teams', zendesk: 'Groups',
  snyk: 'Projects',
  fireflies: 'Organizers', zoom: 'Organizers', grafana: 'Folders',
  google_calendar: 'Calendars', google_drive: 'Files',
};

// Source ids are snake_case; every path segment built from one – the bundled
// integration icons included – is the kebab-case form.
export function sourceSlug(source: string): string {
  return source.replace(/_/g, '-');
}
