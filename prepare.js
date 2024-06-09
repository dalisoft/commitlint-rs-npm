import { maps, prepare } from "binary2npm";

maps.os.linux = 'linux-gnu'

await prepare({
  remote: "github",
  author: "KeisukeYamashita",
  repository: "commitlint-rs",
  remoteToken: process.env.GITHUB_TOKEN,
  binary: "commitlint",
});
