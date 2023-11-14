const core = require("@actions/core");
const { context } = require("@actions/github");

try {
  const githubRepoDescription = core.getInput("repo-description");
  const issuesTemplate = core.getInput("issues-template");
  const aiModel = core.getInput("gpt-model");
  const githubRepo = context.payload.repository.full_name;
  const issueTitle = context.payload.issue.title;
  const issueDescription = context.payload.issue.body;

  console.log(`
  Full repo name: ${githubRepo}
  Repo description: ${githubRepoDescription}

  The title of the issue is: ${issueTitle}

  The body of the issue is:
  ${issueDescription}`);

  // const parsedResponseMessage = "";
  // core.setOutput("is-low-quality-issue", parsedResponseMessage);
} catch (error) {
  core.setFailed(error.message);
}
