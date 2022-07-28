const mongoose = require('mongoose')
const {mongoDBpassword} = require(__dirname+'/secrets.js')

mongoose.connect(`mongodb+srv://ruchik:${mongoDBpassword}@cluster0.xbowr.mongodb.net/blogDB`)

    const blogSchema = mongoose.Schema({
        title: String,
        content: String
    })

    Blog = mongoose.model('Blog',blogSchema)

    blog1 = new Blog({
        title:"AN ESSAY ON LIFE",
        content:"Wordsworth had remarked long ago that our lives are a reflection of the lives in heaven. While many might find that too far-fetched, life is nevertheless very precious. Had it not been so, none would have made efforts to cling on to it as long as possible. The one thing about life that is integral to it is existence. Life includes existence and without existence life cannot happen. Existence is however sometimes challenging. There are many who do not have the fortune to get good education, there are some who do not have access to food and shelter. For them existence is difficult and life is despicably harsh. But just like existence is an important feature about life, another such element is hope. Hope is what people cling on to when they find darkness taking over their lives. Hope is what gives way to survival. Survival and hope are important aspects for anyone and everyone as far as life and living is considered. Essay on Life | Life Essay for Students and Children in English May 18, 2020 by Prasanna Essay on Life: Life is one word that comes with multiple meanings and experiences. Above all life is not just about existence but also about how an individual defines that existence. Hence, it is important to look at life not just from one single perspective. Philosophers, scholars, poets and authors have written much about what constitutes living and more importantly what are the necessary items that define someone’s life. Ofcourse this exercise has been done in various ways. While philosophers would try to find the meaning and purpose behind the life of individuals, poets and authors would document the richness of life at various stages. Life is thus perhaps something that is more than intriguing. Here we have provided sample essays on life which includes both long and short essays that can serve the purpose of a lot of students in light of their examinations. You can read more Essay Writing about articles, events, people, sports, technology many more. Long and Short Life Essay in English for Students and Kids We have written over here two sample essays on life which includes a long essay of 500 words, short essay of 100-150 words and ten important points that highlight the subject matter of the essay. Long Essay on Life in English 500 words Wordsworth had remarked long ago that our lives are a reflection of the lives in heaven. While many might find that too far-fetched, life is nevertheless very precious. Had it not been so, none would have made efforts to cling on to it as long as possible. The one thing about life that is integral to it is existence. Life includes existence and without existence life cannot happen. Existence is however sometimes challenging. There are many who do not have the fortune to get good education, there are some who do not have access to food and shelter. For them existence is difficult and life is despicably harsh. But just like existence is an important feature about life, another such element is hope. Hope is what people cling on to when they find darkness taking over their lives. Hope is what gives way to survival. Survival and hope are important aspects for anyone and everyone as far as life and living is considered. The world these days, governed by competition, makes survival the most difficult thing. And for those whose existence is challenging hope is the only way of survival. This is one way, life can be summed up in words. The fact however is, life cannot be summed up in words. Words fail to express the meaning and purpose that anyone feels he or she has in life. For some it might be to create or build something, for someone it might be gaining knowledge, for someone it might be to have fun. None of these outlooks can be said to be better or worse in terms of the other. It shows how people look at their individual lives as well as the life of others around them so as to make a sense of what they do with their existence on earth. Meaning and purpose however are both difficult to find. Experiences are a major part of life. In fact it guides an individual through his life till his death. Each experience is a lesson for those who come by it. Some intend to learn from their experiences while others tend to ignore it. Experiences are what make it difficult for someone to find the meaning and purpose of his life."
    })

    blog2 = new Blog({
        title:"AN ESSAY ON DEATH",
        content:"Man is mortal. Death is evident in a phenomenon which strikes each person sooner or later. Life is not possible without death. It is a never ending circle from birth, death and rebirth. i.e. if you believe in reincarnation. People say they are afraid of death but in reality they are afraid to die. We all know we are destined to die one day or another. Deep down, we all fear that day our death is in front of ours eye. Because all your life death sounds like a myth to you. It is the moment when death stands eyes to eyes, tall and confident of taking you from yourselves; thatrealization dawns upon you. You realize that death is not all that glorified as shown in movies. It is a much harder phenomenon. Actually it is death what makes every second of life worth living. If you would not have found death, you would not try to live a life worth living. Don’t lie a death before your death. The fear of death is what moves us to see and experience the good things in life. Because we know that death is certain and it can down any day upon us. So why not experience all the beautiful things on Earth before going? A life lived for others are always worth living. It makes you feel alive inside. It gives you a feeling that you still have life alive inside you. Because when you learn to show compassion to others, you show that you have the capacity within you to loves and to trust others. Make sure that you don’t lie before your death. Because that is what is more important. Whatever is your lifespan that is not in your hands? God sends it scribbled into your hands. But have you chose to spend that time is certainly in your hands. When a death occurs in a family, the person is mourned over and all good things about him are discussed; having aside his negative deeds. Even when a person is on his deathbed, he is tracked with all the luxuriesand is given loads of affection. But my question is that if death will come to all of us and we are dying minute by minute every day, then we aren’t nice to all the people around us!? This is certainly beyond my comprehension. We should be good and kind to all the people around us. Because we never know when the death may approach us. The person you just met may be dead the other day. Maybe you left things on a bad note and never got to sort out what was going on between you two. And that is when you realize that you would do anything just to have them back from doom to be beside you-alive breathing and kicking. This is how death affects the mind of a person. All their near and dear ones lose their sanity. It is just one person that dies the actual death yet it is the complete family that goes dead inside even without realizing it. You crave their company all day."
    })

    Blog.find({},(err,data)=>{
        if(!data){
            Blog.insertMany([blog1,blog2],(err)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log('Succeessfully inserted initial blogs')
                }
            })
        }
    })

let getBlogs = async ()=>{
    return await Blog.find({}).exec()
}

let updateBlog = async (blog)=>{
    let newBlog = new Blog({
        title:blog.title,
        content:blog.content
    })
    await newBlog.save()
}

module.exports = {getBlogs,updateBlog}