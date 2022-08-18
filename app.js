const button = document.querySelector('.post');
const tweet = document.querySelector('#tweet_text');
const tweeted = document.getElementById('new_para')
const posted_tweets = document.querySelector('.tweets')
const text_area = document.querySelector('textarea')
let content = tweet.value;



const tweets = [{
    author: 'Akshat',
    tweet: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea, aspernatur culpa labore rem velit excepturi iste temporibus ab magnam itaque accusantium aut suscipit voluptatum sint sunt modi. Omnis, vitae! Lorem ipsum dolor sit amet consectetur       adipisicing elit. Facilis ratione voluptas ullam tempore repudiandae quidem non magnam, debitis eos, quaerat dolorem, nostrum nemo? Aliquam nostrum consectetur illum, perferendis dolorum optio.'
}, {
    author: 'Akshat-2',
    tweet: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea, aspernatur culpa labore rem velit excepturi iste temporibus ab magnam itaque accusantium aut suscipit voluptatum sint sunt modi. Omnis, vitae! Lorem ipsum dolor sit amet consectetur       adipisicing elit. Facilis ratione voluptas ullam tempore repudiandae quidem non magnam, debitis eos, quaerat dolorem, nostrum nemo? Aliquam nostrum consectetur illum, perferendis dolorum optio.'
}, {
    author: 'Akshat-3',
    tweet: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea, aspernatur culpa labore rem velit excepturi iste temporibus ab magnam itaque accusantium aut suscipit voluptatum sint sunt modi. Omnis, vitae! Lorem ipsum dolor sit amet consectetur       adipisicing elit. Facilis ratione voluptas ullam tempore repudiandae quidem non magnam, debitis eos, quaerat dolorem, nostrum nemo? Aliquam nostrum consectetur illum, perferendis dolorum optio.'
}, {
    author: 'Akshat-4',
    tweet: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea, aspernatur culpa labore rem velit excepturi iste temporibus ab magnam itaque accusantium aut suscipit voluptatum sint sunt modi. Omnis, vitae! Lorem ipsum dolor sit amet consectetur       adipisicing elit. Facilis ratione voluptas ullam tempore repudiandae quidem non magnam, debitis eos, quaerat dolorem, nostrum nemo? Aliquam nostrum consectetur illum, perferendis dolorum optio.'
}, {
    author: 'Akshat-5',
    tweet: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea, aspernatur culpa labore rem velit excepturi iste temporibus ab magnam itaque accusantium aut suscipit voluptatum sint sunt modi. Omnis, vitae! Lorem ipsum dolor sit amet consectetur       adipisicing elit. Facilis ratione voluptas ullam tempore repudiandae quidem non magnam, debitis eos, quaerat dolorem, nostrum nemo? Aliquam nostrum consectetur illum, perferendis dolorum optio.'
}, ]

tweets.forEach(tweet => {
    addEle(tweet)
});



button.addEventListener('click', () => {


    addEle({

    })

})



function addEle({ author, tweet }) {

    const newdiv = document.createElement('div')

    newdiv.classList.add('posted_tweet');
    const div_data = `<h3 class="user_name">${author}</h3>
    <p id="new_para"  >${tweet}</p>
    <div class="action-btns">
    <a id="like_active" href="//"><img id="like" src="./images/like.svg" alt="" /></a>
    <img id="retweet" src="./images/retweet.svg" alt="" />
    </div>
    `;
    newdiv.insertAdjacentHTML('afterbegin', div_data);
    document.getElementById('tweets').appendChild(newdiv);
}