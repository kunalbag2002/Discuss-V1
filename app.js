const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multerconfig= require('./config/multerconfig');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get('/', (req, res) => {
    res.render('index');
});



app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/logout', (req, res) => {
    res.cookie("token", "");
    res.redirect('/login');
});

app.get('/profile', isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email }).populate('posts');
    res.render('profile', { user });
});

app.get('/like/:id', isLoggedIn, async (req, res) => {
    let post = await postModel.findOne({ _id: req.params.id }).populate('user');

    const userId = req.user.userId;
    const index = post.likes.indexOf(userId);

    if (index === -1) {
        post.likes.push(userId); // add like
    } else {
        post.likes.splice(index, 1); // remove like
    }

    await post.save();
    res.redirect('/profile'); // render after update
});

app.get('/edit/:id', isLoggedIn, async (req, res) => {
    let post = await postModel.findOne({ _id: req.params.id }).populate('user');

    res.render('edit', { post });
});

app.post('/update/:id', isLoggedIn, async (req, res) => {
    let post = await postModel.findOneAndUpdate(
        { _id: req.params.id }, { content: req.body.content });

    res.redirect("/profile");
});

app.post('/post', isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email });
    console.log(req.body);
    let { content } = req.body;

    let post = await postModel.create({
        user: user._id,
        content: content
    });
    user.posts.push(post._id);
    await user.save();
    res.redirect('/profile');
});

app.post('/register', async (req, res) => {
    const { email, name, username, age, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user) return res.status(400).send('User already exists');

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let user = await userModel.create({
                username,
                name,
                age,
                email,
                password: hash
            });

            let token = jwt.sign({ email: email, userId: user._id }, "secretkey"); //secretkey is used to create token
            res.cookie('token', token);
            res.send("User registered successfully");
        });
    });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    let user = await userModel.findOne({ email });
    if (!user) return res.status(404).send('Something went wrong');

    bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
            const token = jwt.sign({ email: email, userId: user._id }, "secretkey"); //secretkey is used to create token
            res.cookie('token', token);
            res.status(200).redirect('/profile');
        }
        else res.redirect("/login");
    });
});

function isLoggedIn(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect("/login");
    }

    try {
        const data = jwt.verify(token, "secretkey");
        req.user = data;
        next();
    } catch (err) {
        console.error("JWT verification failed:", err.message);
        res.cookie("token", ""); // clear bad token
        return res.redirect("/login");
    }
}

app.listen(3000);