const core = require("@actions/core");
const { context } = require("@actions/github");

try {
  const githubRepoDescription = core.getInput("repo-description");
  const issueTemplate = core.getInput("issue-template");
  const aiModel = core.getInput("gpt-model");
  const githubRepo = context.payload.repository.full_name;
  const issueTitle = context.payload.issue.title;
  const issueDescription = context.payload.issue.body;

  console.log(`
  This repo is ${githubRepo} and it ${githubRepoDescription}.

  The title of the issue is: ${issueTitle}

  The body of the issue is ${issueDescription}`);

  // const parsedResponseMessage = "";
  // core.setOutput("is-low-quality-issue", parsedResponseMessage);
} catch (error) {
  core.setFailed(error.message);
}
