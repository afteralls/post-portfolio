<template>
  <div class="contacts" style="gap: 10px;">
    <div class="contact" style="background-color: #ea4335;">
      <a href="mailto:postapocalypsecore@gmail.com">
        <img src="../assets/svg/mail.svg"/>
        <p>Email</p>
      </a>
    </div>
    <div class="contact" style="background-color: #0088cc;">
      <a href="https://t.me/apocalypsecore">
        <img src="../assets/svg/telegram.svg"/>
        <p>Telegram</p>
      </a>
    </div>
    <div class="contact" style="background-color: #333333">
      <a href="https://github.com/post-apocalypse">
        <img src="../assets/svg/github.svg"/>
        <p>GitHub</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/main';

.contacts {
  display: flex;
  gap: $mSpace / 2;
}

.contact {
  border-radius: $br-rad / 2;
  @include all-cent;
  padding: $mSpace / 2;
  text-align: center;
  transition: $transition;

  &:hover {
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
    background: $sColor !important;
  }

  img {
    margin-right: $mSpace / 2;
    height: 20px;
    width: auto;
  }
}
</style>
