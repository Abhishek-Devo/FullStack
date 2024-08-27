require('dotenv').config()
const express=require('express')
const app=express()

const githubData={
    "login": "Abhishek-Devo",
    "id": 122733700,
    "node_id": "U_kgDOB1DEhA",
    "avatar_url": "https://avatars.githubusercontent.com/u/122733700?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Abhishek-Devo",
    "html_url": "https://github.com/Abhishek-Devo",
    "followers_url": "https://api.github.com/users/Abhishek-Devo/followers",
    "following_url": "https://api.github.com/users/Abhishek-Devo/following{/other_user}",
    "gists_url": "https://api.github.com/users/Abhishek-Devo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Abhishek-Devo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Abhishek-Devo/subscriptions",
    "organizations_url": "https://api.github.com/users/Abhishek-Devo/orgs",
    "repos_url": "https://api.github.com/users/Abhishek-Devo/repos",
    "events_url": "https://api.github.com/users/Abhishek-Devo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Abhishek-Devo/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-01-15T13:57:23Z",
    "updated_at": "2024-07-10T06:55:48Z"
  }
//listen on home route, app.get(path,callback fn which will handle get request on path route)
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/twitter',(req,res)=>{
    res.send('on twitter page')
})

app.get('/login',(req,res)=>{
    res.send('<h1> on login page </h1>')
})
app.get('/github',(req,res)=>{
    res.json({githubData});
})

//listen(port address,callback fn to run on successful listening)
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
});
