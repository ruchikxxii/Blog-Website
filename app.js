const exp = require('express')
const app = exp()


app.set('view engine','ejs')
app.use(exp.static('./public'))


const {getBlogs,updateBlog} = require(__dirname+'/data.js')

app.get('/',(req,res)=>{
    getBlogs().then((data)=>{
        res.render('home',{blogs:data})
    })
})

app.get('/about',(req,res)=>{
    res.send('hello world')
})

app.get('/publish',(req,res)=>{
    res.render('publish',{})
})

app.get('/:btitle',(req,res)=>{

    getBlogs().then(blogs=>{
        let blog = blogs.filter((blog)=>{
        let blog_name = blog.title.split(' ').join('');
        if(blog_name === req.params.btitle){
            return blog
        }
    })
    res.render('blog-page',{
        title: blog[0].title,
        content : blog[0].content
    })
    })
})


app.use(exp.urlencoded({extended:true}))

app.post('/publish',(req,res)=>{
    let title = req.body.title
    let content = req.body.content

    getBlogs().then(blogs=>{
        let blog = blogs.filter((blog)=>{
            let blog_name = blog.title.split(' ').join('');
            if(blog_name === title.split(' ').join('')){
                return blog
            }
        })
        if(blog.length>0){
        res.sendFile(__dirname+'/public/failure.html')
        }
        else{
            updateBlog({title:title,content:content}).then(()=>{
                res.sendFile(__dirname+'/public/success.html')
            })
        }
    })
})

app.listen(3000,()=>{
    console.log('server started on port 3000')
})