$(".rm").click((e)=>{
    console.log('clicked')
    location.assign(`/${e.target.id}`)
})