import request from './request'
function getRequest(url,method,params){
    return request({url,method,params})  
}
function postRequest(url,method,data){
    return request({url,method,data})  
}

let getPath = '/repos/octokit'
let postPath = '/repos/octokit'

export default{ 
    // get
    getData(params){
        return getRequest(getPath+'/octokit.rb','get',params)
    },
    // post
    setData(data){
        return postRequest(postPath+'/octokit.rb','post',data)
    }
}