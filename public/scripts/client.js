/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//
$(document).ready(function () {
  //populate tweet html with data
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
    // return template;
    // $("#tweets-container").prepend(template);
    return template;
  };

  //render tweets when given an array of tweets
  const renderTweets = function (tweets) {
    for (let tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $("#tweets-container").prepend($tweet);
    }
  };

  $("form").submit(function (event) {
    event.preventDefault();
    const text = $("#tweet-text").val();
    let sendOK = true;
    if (text === "") {
      alert("Empty Message");
      sendOK = false;
    }
    if (text.length > 140) {
      alert("Message Exceeed Character Length");
      sendOK = false;
    }
    const tweetContent = $(this).serialize();
    if (sendOK) {
      //posting tweets with ajax
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: tweetContent,
      }).then();
    }
  });

  const loadTweets = $(function () {
    //fetching tweets with ajax
    $.ajax("/tweets", { method: "GET" }).then(function (tweets) {
      renderTweets(tweets);
    });
  });
  loadTweets();
});
