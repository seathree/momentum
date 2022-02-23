const quotes = [
  {
    quote:
      "오래 살기를 바라기 보다 잘 살기를 바라라. Wish not so much to live long as to live well.",
    author: "벤자민 프랭클린 Benjamin Franklin",
  },

  {
    quote:
      "인생의 최대 역설은 살아서 빠져나오는 사람이 거의 없다는 점이다. The supreme irony of life is that hardly anyone gets out of it alive.",
    author: "로버트 하인라인 Robert Heinlein",
  },

  {
    quote:
      "올바른 순간에 잘못된 행동을 하는 것이 삶의 모순 중 하나라고 생각한다. I suppose that's one of the ironies of life doing the wrong thing at the right moment.",
    author: "찰리 채플린 Charlie Chaplin",
  },

  {
    quote:
      "여러분의 선생님이 엄격하다고 생각한다면, 직장 상사를 만날 때까지 기다려보세요. 상사는 (선생님처럼) 종신제가 아니니까요.(더 엄격할 거예요.) If you think your teacher is tough, wait until you get a boss. He doesn't have tenure.",
    author: "빌 게이츠 Bill Gates",
  },

  {
    quote:
      "자신에 대한 정의를 바꿀 만큼 심대한 변화는 단순히 삶과 사고 방식의 사소한 변화가 아닌, 총체적 탈태(脫態)를 요구한다. Any transition serious enough to alter your definition of self will require not just small adjustments in your way of living and thinking but a full-on metamorphosis.",
    author: "마사 베크 Martha Beck",
  },

  {
    quote:
      "삶은 공평하지 않다. 다만 죽음보다는 공평할 뿐이다. Life isn't fair. It's just fairer than death, that's all.",
    author: "윌리엄 골드먼 William Goldman",
  },

  {
    quote:
      "인간사에는 안정된 것이 하나도 없음을 기억하라. 그러므로 성공에 들뜨거나 역경에 지나치게 의기소침하지 마라. Remember that there is nothing stable in human affairs; therefore avoid undue elation in prosperity, or undue depression in adversity.",
    author: "소크라테스 Socrates",
  },

  {
    quote:
      "인생이란 누구나 한 번쯤 시도해 볼 만한 것이다. Life is something that everyone should try at least once.",
    author: "헨리 J. 틸만 Henry J. Tillman",
  },

  {
    quote:
      "젊은 날의 의무는 부패에 맞서는 것이다. The duty of youth is to challenge corruption.",
    author: "커트 코베인 Kurt Cobain",
  },

  {
    quote:
      "나는 죽음 후에 계속될 미성숙이 기대된다. What I look forward to is continued immaturity followed by death.",
    author: "데이브 배리 Dave Barry",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
