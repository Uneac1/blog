var posts=["2025/05/27/hello-world/","2025/05/27/测试/","2025/05/27/Pages/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };