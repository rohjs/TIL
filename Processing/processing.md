# Processing

I am learning Processing for the VFX studio project. The objective of course is to make beautiful videos using VFX tools like Aftereffect, Cinema4D, Maya etc, but I'll just stick to Processing. _Sorry for that, professor!_  
Processing offers powerful features to create generative arts using code. It is super famous and I can't believe how I could manage not learning this. I will organise stuffs that I learned in here and I hope to make _awesome & creative_ interactive media art in the shortest time possible.



## Index

1. [Installation](### 1. Installation)



### 1. Installation

Since I am a heavy user of Sublime Text 3, I first need to set the environment to write Processing codes with the Sublime Text. Below is a set of instructions that allows you to do so. 

1. Download [Processing](https://processing.org/download/).
2. Download [Sublime Text 3](https://www.sublimetext.com/3).
3. Start Processing application, go to _Tools > Install "processing-java"_ and install processing-java.
4. Download [Package Control](https://packagecontrol.io/installation) in Sublime Text 3.
5. Press `cmd+shift+p` and go to `Package Control: Install Package`.
6. Write `Processing` and download it.
7. Ta-da! Well done!

Now You are ready to use Processing. All set up! Let's write a real simple Processing codes.

```processing
void setup() {
  fill(#0066ff);
  rect(0, 0, 100, 100);
}
```

Save your file like this: `filename.pde`. Press `Cmd+B` and then the code you wrote will be built as if it were written in the Processing app.
