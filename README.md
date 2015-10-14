# Tamamoji
Inspired by the classic tamagochi game, Tamamoji is a terminal game that creates emoji pets who require food, sleep and attention. How good of a caretaker are you?

##Set up
In order to use `tamamoji` as a command (instead of having to type `node tamamoji` everytime) you'll need to follow this set up:

```
$ git clone https://github.com/linzjax/Tamamoji.git
$ cd Tamamoji
#this changes ownership of tamamoji to you
$ chown u+x tamamoji
#this creates a linked copy in your usr/local/bin
$ cp -l tamamoji /usr/local/bin/node

```

##Gameplay
Your pet's mood is determined based on the last time you checked out it's doing. They require food and sleep at regular intervals, regardless of whether or not your terminal is open. Commands that you will need:

To create your new pet, just chose a name. We'll name ours Steve.
` $tamamoji create Steve `

Steve is now stored in a `Pets` folder. You can see all of the pets you've created:
` $tamamoji list pets`

Now we need to check out Steve is doing.
` $tamamoji how are you Steve`

You'll need to feed him on occasion.
` $tamamoji feed Steve`

You'll also need to make sure he gets some sleep.
` $tamamoji go to sleep Steve `

You're doing great! And that's all you need to know. Just check out Steve from time to time and enjoy the rewards of being a pet owner: their smiling face.

<img src='./img/happy_pet'>
