function asyncWrap(fn){
  return function(req,res,next){
    fn(req,res,next).catch((err) => next(err));
  }
}
//Index route
app.get("/chats", asyncWrap(async (req, res,next) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
}));