export interface Committer {
  name: string
  date: Date
}
export interface Commit {
  committer: Committer
}
export interface Author {
  login: string
  name: string
  avatar_url: string
  html_url: string
}
export interface CommitResponse {
  commit: Commit
  html_url: string
  author: Author
}
