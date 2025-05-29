var posts=["2025/05/27/Pages/","2025/05/27/Test/","2025/05/27/hello-world/","2025/05/28/tt/","2025/05/29/hexo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };