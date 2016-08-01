# Timestamp-Microservice
将web app部署到heroku上，记录几点

  1.在app的顶级目录下，添加文件Procfile，注意无后缀。
  
       目的在于：告诉heroku怎么运行app
       
       内容：(此处是web服务器的运行命令)
       
            web:node server.js (注解：server.js是监听接口文件)
            
  2.heroku会自动给app分配接口。
  
      因此，在监听程序中，不固定接口号，而使用
      
          process.env.PORT || 3000
