import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const dir = "storybook-static";

// Copy CNAME into the build folder
fs.copyFileSync("CNAME", path.join(dir, "CNAME"));

execSync(`git init ${dir}`);
execSync(`git -C ${dir} checkout -b gh-pages`);
execSync(`git -C ${dir} add -A`);
execSync(`git -C ${dir} commit -m "Deploy Storybook"`);

const remote = execSync("git remote get-url origin").toString().trim();
execSync(`git -C ${dir} remote add origin ${remote}`);
execSync(`git -C ${dir} push origin gh-pages --force`);

fs.rmSync(path.join(dir, ".git"), { recursive: true });
console.log("Deployed successfully.");