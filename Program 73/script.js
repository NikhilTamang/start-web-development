function createCard(title, cName, views, monthsOld, duration, thumbnail) {

  let string = views.toString();
  let actualViews = "";

  if (views < 1000) {
    actualViews = views;
  } else if (views < 10000) {
    actualViews = string.slice(0, 1) + "K";
  } else if (views < 100000) {
    actualViews = string.slice(0, 2) + "K";
  } else if (views < 1000000) {
    actualViews = string.slice(0, 3) + "K";
  } else {
    actualViews = string.slice(0, 3) + "M";
  }

  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<div class="img_section">
          <img
            src="${thumbnail}"/>
          <button>${duration}</button>
    </div>
        <div class="content_section">
          <span class="title"
            >${title}</span
          >
          <div class="content_section2">
            <span class="cname">${cName}</span>
            <span class="separator">•</span>
            <span class="views">${actualViews}</span>
            <span class="separator">•</span>
            <span class="months">${monthsOld}</span>
          </div>
        </div>`;

  document.querySelector(".container").append(card);
}

// #Card-1
createCard(
  "Introduction to Backend | Backend, node.js & npm | Sigma Web Development course | Tutorial - #1",
  "CodeWithHarry",
  560000,
  "1 month ago",
  "31:22",
  "https://i.ytimg.com/vi/NoWRBo3Uf8E/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA2mDiQbqxLuGC5OvTUpJDv8seDmg"
);

// #Card-2
createCard(
  "Responsive Web Design with Flexbox & Grid – Beginner to Pro | Sigma Web course | Tutorial - #2",
  "CodeWithHarry",
  107280,
  "7 months ago",
  "20:22",
  "https://i.ytimg.com/vi/Ojo_lo0djbQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB5vyt3kwWEkqTOXSmeL5jBRxKpAQ"
);

// #Card-3
createCard(
  "DOM Manipulation in JavaScript | Sigma Web Development course | Tutorial - #3",
  "CodeWithHarry",
  10723,
  "1 year ago",
  "01:46",
  "https://i.ytimg.com/vi/ovKVqo-L2EM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAgdXKH__t5Ca0E2j1xndnX73-VYA"
);

// #Card-4
createCard(
  "JavaScript for Beginners – Learn the Core Concepts Fast | Sigma Web Development course | Tutorial - #4",
  "CodeWithHarry",
  107220080,
  "11 months ago",
  "29:52",
  "https://i.ytimg.com/vi/nhSZ4LhIii8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCYkFuWbeS7S1WjTMkRW4DP67v6lw"
);

// #Card-5
createCard(
  "Express.js Tutorial – REST API for Beginners | Sigma Web Development course | Tutorial - #5",
  "CodeWithHarry",
  1072,
  "9 month ago",
  "02:22",
  "https://i.ytimg.com/vi/izwkombjECA/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAGcNsQsRjB7oXM2bG1PnpKJs_Rng"
);

// #Card-6
createCard(
  "MongoDB Basics – Store and Retrieve Data Like a Pro | Sigma Web Development course | Tutorial - #6",
  "CodeWithHarry",
  233380,
  "5 year ago",
  "05:55",
  "https://i.ytimg.com/vi/eGc35Qj0y4Q/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLD1xe_Dvgy3lbUn0CrzdS9g-ZwSQg"
);

// #Card-7
createCard(
  "How to Deploy a Full Stack App – Free Hosting with Render & GitHub | Sigma Web Development course | Tutorial - #7",
  "CodeWithHarry",
  999280,
  "9 months ago",
  "32:19",
  "https://i.ytimg.com/vi/cXkwFjBrWfk/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCc0C-tk9IXfrGWq2ietQcT_1nzcg"
);

// #Card-8
createCard(
  "You Made It! Final Words & Next Steps in Your Dev Journey | Sigma Web Development course | Tutorial - #8",
  "CodeWithHarry",
  893280,
  "3 weeks ago",
  "30:52",
  "https://i.ytimg.com/vi/iZb0NsF3Xwg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLC4l60dCMnc2I6tUsj0iHOsGrgPnA"
);
