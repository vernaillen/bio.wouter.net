export interface CommitResponse {
  commit: Commit
  html_url: string
  author: Author
}
export interface Commit {
  committer: Committer
}
export interface Committer {
  name: string
  date: Date
}
export interface Author {
  login: string
  name: string
  avatar_url: string
  html_url: string
}
