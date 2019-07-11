workflow "New workflow" {
  on = "push"
  resolves = ["npm test"]
}

action "npm install" {
  uses = "docker://node:10-alpine"
  args = "npm install"
}

action "npm test" {
  uses = "docker://node:10-alpine"
  needs = ["npm install"]
  args = "npm test"
}
