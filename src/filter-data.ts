// Canonical source vocabulary.
export const SOURCES = [
  'github', 'slack', 'discord', 'linear', 'notion', 'jira', 'gitlab', 'bitbucket',
  'azure_devops', 'figma', 'confluence', 'microsoft_outlook', 'microsoft_teams',
  'sentry', 'datadog', 'pagerduty', 'asana', 'gmail', 'buildkite', 'circleci', 'vercel',
  'incident_io',
] as const;

export const SOURCE_NAMES: Record<string, string> = {
  github: 'GitHub', slack: 'Slack', discord: 'Discord', linear: 'Linear',
  notion: 'Notion', jira: 'Jira', gitlab: 'GitLab', bitbucket: 'Bitbucket',
  azure_devops: 'Azure DevOps', figma: 'Figma', confluence: 'Confluence',
  microsoft_outlook: 'Outlook', microsoft_teams: 'Microsoft Teams',
  sentry: 'Sentry', datadog: 'Datadog', pagerduty: 'PagerDuty', asana: 'Asana',
  gmail: 'Gmail', buildkite: 'Buildkite', circleci: 'CircleCI', vercel: 'Vercel',
  incident_io: 'incident.io',
};

export const SOURCE_PROJECT_LABEL: Record<string, string> = {
  azure_devops: 'Repositories', github: 'Repositories', gitlab: 'Projects',
  bitbucket: 'Repositories', slack: 'Channels', discord: 'Channels', linear: 'Teams',
  jira: 'Projects', notion: 'Workspace', figma: 'Files', confluence: 'Spaces',
  microsoft_outlook: 'Senders', microsoft_teams: 'Chats', sentry: 'Projects',
  datadog: 'Monitors', pagerduty: 'Services', asana: 'Projects', gmail: 'Senders',
  buildkite: 'Pipelines', circleci: 'Projects', vercel: 'Projects',
  incident_io: 'Incident types',
};
