/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//
$(document).ready(function () {
  //hardcoded tweet data
  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

  const createTweetElement = (tweetData) => {
    const template = `
    <section class='tweets'>
      <header class="tweet-header">
        <div class="profile">
          <img src=${tweetData.user.avatars}>
          <h2 class="fullname">${tweetData.user.name}</h2>
        </div>
        <h2 class="username">${tweetData.user.handle}</h2>
      </header>
      <div class="tweet-content">
        <p>${tweetData.content.text}</p>
      </div>
      <footer class="tweet-footer">
        <p class="date-posted">${timeago.format(tweetData.created_at)}</p>
        <div class="tweet-icons">
          <i class="fas fa-solid fa-flag icon"></i>
          <i class="fas fa-solid fa-retweet icon"></i>
          <i class="fas fa-solid fa-heart icon"></i>
        </div>
      </footer>
    </section>
    `;

    return template;
  };

  const renderTweets = function (tweets) {
    for (let tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $("#tweets-container").append($tweet);
    }
  };

  renderTweets(data);
});
