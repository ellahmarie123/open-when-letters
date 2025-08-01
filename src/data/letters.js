import React from "react";

const letters = [
  {
    id: 1,
    title: "Open When You're Sad",
    content: (
      <>
        Hi love, I wish I could be there to hold you right now. Please remember
        it's okay to feel this way. I'm so proud of how strong you are. I'm here
        for you, always. 💖
        <br></br>
        <br></br>
        PS: Basta libre mo ako ng samg always charot
      </>
    ),
  },
  {
    id: 2,
    title: "Open When You Miss Me",
    content: (
      <>
        Missing me? I miss you more. Imagine me hugging you so tight right now.
        You're in my heart, even when we’re apart. 🤗
        <br></br>
        <br></br>
        PS: Panis baby rhyme 😎
      </>
    ),
  },
  {
    id: 3,
    title: "Open When It's Our Anniversary",
    content: (
      <>
        Happy anniversary, my love. Every moment with you has been a chapter in
        my favorite story. I can't wait to write more pages with you. 👩‍❤️‍👩
        <br></br>
        <br></br>
        PS: I love you so so much babyyy
      </>
    ),
  },
  {
    id: 4,
    title: "Open When You Can't Sleep",
    content: (
      <>
        Close your eyes, breathe in deeply, and imagine me next to you.
        Everything will be okay. I’ll still be here in the morning. 🌙,
        <br></br>
        <br></br>
        PS: add mo sa imagination mo baby na nakahawak ako sa you-know hahaha
        joke
      </>
    ),
  },
  {
    id: 5,
    title: "Open When You're Stressed",
    content: (
      <>
        Take a break, my love. Breathe. You’ve done your best today. I believe
        in you so much — and I’m cheering you on. 💪
        <br></br>
        <br></br>
        PS: Kung nakaya mo ang stress sa ka-epalan ko baby, kayang-kaya mo rin
        to.
      </>
    ),
  },
  {
    id: 6,
    title: "Open When You Need a Laugh",
    content: (
      <>
        I used to be addicted to soap ... <br></br> But now I'm clean.
        <br></br>
        <br></br>
        PS: hulaan ko baby, hindi ka natawa
      </>
    ),
  },
  {
    id: 7,
    title: "Open When You're Angry at Me",
    content: (
      <>
        I’m sorry, my love. I never want to hurt you. Whatever it is, I’m ready
        to listen and fix it. You mean more to me than being right. ❤️
        <br></br>
        <br></br>
        PS: I love you so much baby, usap na tayo baby para bati na tayo
      </>
    ),
  },
  {
    id: 8,
    title: "Open When You're Feeling Insecure",
    content:
      "You are beautiful, you are enough, and you are more than worthy of love — especially mine. 💕",
  },
  {
    id: 9,
    title: "Open When You Need Motivation",
    content: (
      <>
        You’ve got this! You’re capable of amazing things. I believe in you even
        when you don’t believe in yourself. Go shine, my star! ✨<br></br>
        <br></br>
        PS: Pag hindi ito enough baby isipin mo nalang yung motivational rice ni
        Rendon
      </>
    ),
  },
  {
    id: 10,
    title: "Open When You’re Celebrating Something",
    content: (
      <>
        Yay! I'm so proud of you! Whether it’s a small win or a big one, I’m
        cheering like a crazy person because YOU DID IT! 🎉🎊
        <br></br>
        <br></br>
        Insert bgm: you did it, you did it, you did it, hey! 🎶.
        <br></br>
        PS: Pag hindi mo yan alam baby, wala ka childhood charot.
      </>
    ),
  },
  {
    id: 11,
    title: "Open When You're Overthinking",
    content: (
      <>
        Your thoughts are valid, but please don’t be too hard on yourself. Let
        go a little. You’re doing okay, I promise. Let me help carry the weight.
        🫂
        <br></br>
        <br></br>
        PS. Alam ko nagwei-weightlifting ka baby as exercise pero wag mo naman
        buhatin problema ng buong Mars.
      </>
    ),
  },
  {
    id: 12,
    title: "Open When You're Feeling Lonely",
    content: (
      <>
        Hey, you're not alone—not really. I’m always with you, even if not
        physically. I’m just a message, a memory, or a letter away. ❤️
        <br></br>
        <br></br>
        PS. Tsaka may kasama ka lagi sa kwarto mo baby ko 👻 charot, si bear at
        milk tea kasi un baby 😂.
      </>
    ),
  },
  {
    id: 13,
    title: "Open When You Want to Know Why I Love You",
    content: (
      <>
        There are so many reasons — your heart, your smile, the way you care
        about people, your strength (and your coco melon 😉). You're my home and
        my peace. 💞
        <br></br>
        <br></br>
        PS. I love you so so much baby ko, can't wait to spend the rest of my
        life with you ❤️.
      </>
    ),
  },
  {
    id: 14,
    title: "Open When It's Your Birthday",
    content: (
      <>
        Happy birthday, my love! 🎂 I'm so glad the universe made you and
        brought you into my life. Let’s celebrate your existence. You are a
        gift. 🎁
        <br></br>
        <br></br>
        #SalamatkayTita&Tito 😆
      </>
    ),
  },
  {
    id: 15,
    title: "Open When You’re Sick",
    content: (
      <>
        I wish I could bring you soup and kiss your forehead. Please rest and
        hydrate, and imagine me snuggling you under the blanket. 🧣🍵
        <br></br>
        <br></br>
        PS: Wag mo na alalahanin yung soup na ginawa ko sayo non baby, I've
        changed (sana) 😆
      </>
    ),
  },
  {
    id: 16,
    title: "Open When You Want a Hug",
    content: (
      <>
        Wrap your arms around yourself really tight. That's me, giving you the
        warmest, most comforting hug in the world. 🤗
        <br></br>
        <br></br>
        PS: Sending virtual hugs for you baby ko
      </>
    ),
  },
  {
    id: 17,
    title: "Open When You Need to Smile",
    content: (
      <>
        Your smile lights up my entire world. If you're reading this, smile for
        me right now — just because you're loved. 😊💫
        <br></br>
        <br></br>
        PS: Entire world??! Ang taray sa entire world hindi mo kaya baby. Pero
        fr smile ka na, ang ganda ng smile mo baby ko
      </>
    ),
  },
  {
    id: 18,
    title: "Open When You're Bored",
    content: (
      <>
        Here’s an idea: message me something random, look at our photos, or
        think of a silly memory. Or hey — maybe write me a letter back 😉
        <br></br>
        <br></br>
        PS: Or, nuod ka ---- baby
      </>
    ),
  },
  {
    id: 19,
    title: "Open When You Feel Like Giving Up",
    content: (
      <>
        Don't. Please don’t. You are stronger than you know, and you’ve made it
        through 100% of your bad days. I’m here. I believe in you. Always. 💖
        <br></br>
        <br></br>
        PS: Pero kung gusto mo na talaga gumive up baby, wag. Wala ka na pang
        mine niyan.
      </>
    ),
  },
  {
    id: 20,
    title: "Open When You're in Love With Me",
    content: (
      <>
        If you're opening this, that means your heart is full — just like mine.
        Let’s hold on to this love and never let go. I love you endlessly. ❤️
        <br></br>
        <br></br>
        #walangmagbebreakever
      </>
    ),
  },
];

export default letters;
