import Http from './http'

export const getTestData = ()=>{
    return Http.get('/repos/octokit/octokit.rb')
    // github 开发api  https://api.github.com/repos/octokit/octokit.rb
}