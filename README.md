# Grocer.ly!

An app that focuses of gameifying recycling and making it fun by providing incentives.

This is a part of a system we designed. We also have hardware (Qualcomm Dragonboard) that uses an ultrasonic sensor to keep
track of how many plastic bags. Originally, we wanted the hardware to scan our QR codes, but we didn't have a camera
available.

Devpost: https://devpost.com/software/grocer-ly

How to run:

We're using expo as a way to facilitate our React Native development, and so this might take a tiny bit longer. These steps
are done on a Unix terminal, although I don't think a windows environment is too different with these commands.

Steps are basically taken from this website: https://expo.io/learn

1) Make a fresh clone

2) Download NodeJS (From: https://nodejs.org/)

3) Run: `npm install expo-cli --global`

4) Run: `npm install`

5) Download the Expo app on iOS or Android appstore

6) Run: `expo start`


Now, a new window should pop-up, showing a QR code. Your iPhone or Android phone can then scan that QR code using the Expo
app, to run the code.

We didn't have much time to think about exporting it as an actual app, so this is the best we can do thus far. 

There's also a server file in this repository. Right now for the purposes of this hackathon, we're using a server that handles
some http requests to keep track of the data of all of the users. It is hosted on Google Cloud Platform (Thanks for the cloud
credits!), and it will probably be up for a week or two after the hackathon.
