const express = require("express");
const router = express.Router();
const axios = require("axios");

const users = {};


router.get("/", (req, res) => {
  const arr = [];
  Object.entries(users).forEach(([key, val]) => {
    arr.push({
      id: val.login,
      avatar_url: val.avatar_url,
    });
  });
  res.send(arr);
});

//Individual user
router.get("/:userId", (req, res) => {
  const data = users[req.params.userId];
  const individualDev = {
    id: data.login,
    avatar_url: data.avatar_url,
    name: data.name,
    company: data.company,
    blog: data.blog,
    location: data.location,
    email: data.email,
    bio: data.bio,
    github_id: data.github_id,
    linkedin_id: data.linkedin_id,
    codechef_id: data.codechef_id,
    hackerrank_id: data.hackerrank_id,
    twitter_id: data.twitter_id,
    medium_id: data.medium_id,
    repos: data.repos,
  };
  res.send(individualDev);
});

router.post("/", (req, res, next) => {
  const githubid = req.body.github_id;
  const linkedin_id = req.body.linkedin_id;
  const codechef_id = req.body.codechef_id;
  const hackerrank_id = req.body.hackerrank_id;
  const twitter_id = req.body.twitter_id;
  const medium_id = req.body.medium_id;
  const userInfoPromise = axios(`https://api.github.com/users/${githubid}`);
  const reposPromise = axios(`https://api.github.com/users/${githubid}/repos`);
  Promise.all([userInfoPromise, reposPromise]).then((responses) => {
    const [userInfo, repos] = responses;
    users[githubid] = {
      ...userInfo.data,
      githubid: githubid,
      linkedin_id: linkedin_id,
      codechef_id: codechef_id,
      hackerrank_id: hackerrank_id,
      twitter_id: twitter_id,
      medium_id: medium_id,
      repos: repos.data,
    };
    res.send(userInfo.data);
  });
});

module.exports = router;
